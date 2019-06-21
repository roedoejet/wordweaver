// Core
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';



// Services
import { AffixService } from './affix.service'
import { PronounService } from './pronoun.service'
import { SettingsService } from './settings.service';
import { VerbService } from './verb.service'
import { MatSnackBar } from '@angular/material';

@Injectable()
export class TierService {
    errorTier: any = `Oh no! We couldn't conjugate this. Please make sure you're connected to the internet and try again. If the problem keeps happening, please contact us!`;
    tiers
    constructor(private affixService: AffixService, private pronounService: PronounService,
        private verbService: VerbService, private http: HttpClient, private settingsService: SettingsService, private snackBar: MatSnackBar) {

    }

    ngOnInit() {
    }

    // Determine if object is null or has any null properties. Intended for Agent and Patient
    hasNull(target) {
        if (target) {
            for (var member in target) {
                if (target[member] == null)
                    return true;
            }
            return false;
        } else {
            return true;
        }
    }

    // Return 'agent' or 'patient' or both
    determinePNType(conjugation, verb_role) {
        let pn_roles = []

        if (verb_role === 'red') {
            pn_roles.push("agent")
        } else if (verb_role === 'blue') {
            pn_roles.push('patient')
        } else {
            pn_roles.push("agent")
            pn_roles.push('patient')
        }
        return pn_roles
    }


    // This is an old recycled function and is very awkward. Should be changed.
    createTiers(conjugations) {
        return conjugations.map(conjugation => {
            return {
                'main': this.createTier(conjugation,
                    { 'keys': ['value'], 'seperator': '' },
                    { 'keys': ['value'], 'seperator': '' },
                    { 'keys': ['value'], 'seperator': '' }),

                'secondary': this.createTier(conjugation,
                    { 'keys': [' root'], 'seperator': '' },
                    {
                        'keys': [
                            'agent',
                            'patient'],
                        'seperator': ' > '
                    },
                    { 'keys': ['gloss'], 'seperator': '' }),

                'ternary': this.createTier(conjugation,
                    { 'keys': ['gloss'], 'seperator': '' },
                    {
                        'keys': [
                            'gloss',
                            'obj_gloss'],
                        'seperator': ' > '
                    },
                    { 'keys': ['gloss'], 'seperator': '' }),
                'translation': conjugation['translation'],
                'error': this.errorTier,
                'affopt': conjugation['affopt'],
                'pronoun': conjugation['pronoun']
            }
        });
    }

    createTier(conjugation, verb_key_obj, pn_key_obj, aff_key_obj) {
        // console.log(conjugation)
        // use key_obj whose condition key is true
        let verb_role = this.verbService.getVerb(conjugation['root']['tag'])['thematic_relation']
        // PN
        let pronoun_role = this.determinePNType(conjugation, verb_role)
        if (pronoun_role.indexOf('agent') > -1 && pronoun_role.indexOf('patient') > -1) {
            conjugation.pronoun['gloss'] = this.pronounService.getPronoun(conjugation.pronoun['agent'])['gloss']
            conjugation.pronoun['obj_gloss'] = this.pronounService.getPronoun(conjugation.pronoun['patient'])['obj_gloss']
        } else if (pronoun_role.indexOf('agent') > -1) {
            conjugation.pronoun['gloss'] = this.pronounService.getPronoun(conjugation.pronoun['agent'])['gloss']
        } else {
            conjugation.pronoun['gloss'] = this.pronounService.getPronoun(conjugation.pronoun['patient'])['gloss']
        }
        let pn_keys = pn_key_obj['keys']
        let pronoun_value;
        if (pronoun_role.length > 1) {
            pronoun_value = pn_keys.map(key => {
                console.log(key)
                console.log(conjugation.pronoun)
                return conjugation.pronoun[key]
            }).join(pn_key_obj['seperator']);
        } else {
            if (conjugation.pronoun[pn_keys[0]]) {
                pronoun_value = conjugation.pronoun[pn_keys[0]]
            } else {
                pronoun_value = pn_keys[0]
            }
        }
        let pronoun_role_css = pronoun_role
        console.log(conjugation)
        if (verb_role === 'red' && conjugation['affixes'].filter(x => x.tag === 'perf').length > 0) {
            pronoun_role_css = ['patient']
        }

        // But it should give Agent if it's there, else Patient
        let pronoun_obj = { 'position': conjugation['pronoun']['position'], 'value': pronoun_value, 'classes': [pronoun_role_css.join(' '), "pronoun"].join(' '), 'type': 'pronoun' }

        // Verb
        conjugation.root['gloss'] = this.verbService.getVerb(conjugation.root['tag'])['gloss']
        let verb_value = verb_key_obj['keys'].map(key => {
            // if the key exists in the conjugation provided, return the value
            if (conjugation.root[key]) {
                return conjugation.root[key]
                // else return the key
            } else {
                return key
            }
        }).join(verb_key_obj['seperator'])

        let verb_root_obj = { 'position': conjugation['root']["position"], 'value': verb_value, 'classes': ['root'].join(' '), 'type': 'root' }

        // Affixes
        let affixes = [];
        console.log(conjugation)

        conjugation.affixes.forEach((morpheme) => {
            if (morpheme != null) {
                morpheme['class'] = morpheme['type'];
                morpheme['gloss'] = this.affixService.getAffix(morpheme['tag'])['gloss'];
                affixes.push(morpheme)
            }
        })
        // if (conjugation.aspect != null) {
        //     let morpheme = conjugation.aspect;
        //     morpheme['class'] = 'aspect';
        //     morpheme['gloss'] = this.affixService.getAffix(morpheme['tag'])['gloss']
        //     morpheme['type'] = 'asp'
        //     affixes.push(morpheme);
        // }
        // if (conjugation.tmp_affix != null) {
        //     conjugation.tmp_affix.forEach((morpheme) => { if (morpheme != null) { morpheme['class'] = 'tmp'; morpheme['gloss'] = this.affixService.getAffix(morpheme['tag'])['gloss']; morpheme['type'] = 'tmp'; affixes.push(morpheme) } })
        // }
        // if (conjugation.post_aspect != null) {
        //     conjugation.post_aspect.forEach((morpheme) => { if (morpheme != null) { morpheme['class'] = 'post_aspect'; morpheme['gloss'] = this.affixService.getAffix(morpheme['tag'])['gloss']; morpheme['type'] = 'post_aspect'; affixes.push(morpheme) } })
        // }
        // if (Array.isArray(conjugation["required_affixes"]) && conjugation["required_affixes"].length) {
        //     conjugation["required_affixes"].forEach((morpheme) => {
        //         if (morpheme != null) {
        //             morpheme['gloss'] = this.affixService.getAffix(morpheme['tag'])['gloss']
        //             morpheme['class'] = 'req'; morpheme['type'] = 'req'; affixes.push(morpheme)
        //         }

        //     })
        // }

        // Add non-null affix html to affixes_html_arr
        let affixes_obj_arr = []
        affixes.forEach((affix) => {
            if (affix.value != null && affix.value != '') {
                let aff_value = aff_key_obj['keys'].map(key => {
                    // if the key exists in the conjugation provided, return the value
                    if (affix[key]) {
                        return affix[key]
                        // else return the key
                    } else {
                        return key
                    }
                }).join(aff_key_obj['seperator'])

                affixes_obj_arr.push({ "position": affix.position, "value": aff_value, "classes": [affix["class"]].join(' '), "type": affix["type"] })
            }
        });

        // Sort elements
        let tier_arr = [pronoun_obj, verb_root_obj].concat(affixes_obj_arr)
        tier_arr.sort((a: any, b: any) => a['position'] - b['position'])
        return tier_arr
    }


}
