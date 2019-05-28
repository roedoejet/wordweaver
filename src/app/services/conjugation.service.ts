import { Conjugation } from '../models'
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpParams } from '@angular/common/http';
import { TierService } from './tier.service';

import { MatSnackBar } from '@angular/material'
import { ErrorSnackComponent } from '../components/shared/error/error.snack'
import { of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { uniq } from 'lodash';
import { VerbService } from './verb.service'
import { PronounService } from './pronoun.service'
import { SettingsService } from './settings.service'



@Injectable()
export class ConjugationService {
    path = environment.base + environment.prefix + `conjugations`
    test_path = environment.base + environment.test_prefix + `conjugations`
    conjugations$ = this.http.get<Conjugation[]>(this.path)
    constructor(private http: HttpClient, private tierService: TierService, public snackBar: MatSnackBar, private verbService: VerbService, private pronounService: PronounService, private settingsService: SettingsService) {

    }

    createRequestUrl(tableargs, optional?: object[]) {
        let params = new HttpParams();
        let agents = tableargs['agent']
        let patients = tableargs['patient']
        let afftags = tableargs['aff-option']
        let verbtags = tableargs['root']
        if (agents) {
            agents.forEach(agent => {
                params = params.append('agent', agent);
            });
        }
        if (patients) {
            patients.forEach(patient => {
                params = params.append('patient', patient);
            });
        }
        if (afftags) {
            afftags.forEach(afftag => {
                params = params.append('aff-option', afftag)
            });
        }
        if (verbtags) {
            verbtags.forEach(verbtag => {
                params = params.append('root', verbtag);
            });
        }
        if (optional) {
            optional.forEach(option => {
                params = params.append(option['param'], option['value'])
            })
        }
        return params
    }

    conjugate(tableargs, optional?: object[]) {
        let params = this.createRequestUrl(tableargs, optional)
        let path = this.path
        if (this.settingsService.settings.value['test_api']) {
            console.log('true')
            path = this.test_path
        }
        return this.http.get(path, { params: params })
            .pipe(
                catchError(err => {
                    this.snackBar.openFromComponent(ErrorSnackComponent, {
                        data: { 'message': err.error.message, 'action': 'OK' },
                        horizontalPosition: "center",
                        verticalPosition: 'top',
                        duration: 3000
                    })
                    return of(false);
                }
                )
            )
    }

    conjugateTable(tableargs, test?) {
        return this.conjugate(tableargs, test = test)
            .pipe(
                map(res => this.tierService.createTiers(res))
            )
    }

    returnAffopts(res) {
        let affopts = []
        res.forEach(conj => {
            affopts.push(conj.affopt)
        })
        affopts = uniq(affopts)
        affopts = affopts.map(a => { return { "name": a } })
        return affopts
    }

    returnPros(res, v) {
        let pronouns = []
        res.forEach(conj => {
            if (conj.root['tag'] === v) {
                let vb = this.verbService.getVerb(v)
                if (vb['thematic_relation'] === 'red') {
                    pronouns.push(this.pronounService.getPronoun(conj.pronoun['agent'])['gloss'])
                } else if (vb['thematic_relation'] === 'blue') {
                    pronouns.push(this.pronounService.getPronoun(conj.pronoun['patient'])['gloss'])
                } else {
                    pronouns.push(this.pronounService.getPronoun(conj.pronoun['agent'])['gloss'] + " > " + this.pronounService.getPronoun(conj.pronoun['patient'])['obj_gloss'])
                }
            }
        })
        pronouns = uniq(pronouns)
        pronouns = pronouns.map(a => { return { "name": a } })
        return pronouns
    }

    returnValue(conj) {
        let morphemes = [conj.root, conj.pronoun].concat(conj.affixes)
        morphemes = morphemes.sort(function (a, b) {
            return a.position - b.position
        })
        return morphemes.map(m => m.value).join("")
    }

}
