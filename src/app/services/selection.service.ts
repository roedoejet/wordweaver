import { Conjugation } from '../models'
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { RequestParams } from '../models'


@Injectable()
export class SelectionService {
    path = environment.base + environment.prefix + `conjugations`
    conjugations$ = this.http.get<Conjugation[]>(this.path)
    selection: RequestParams = { 'root': [], 'aff-option': [], 'patient': [], 'agent': [] };
    constructor(private http: HttpClient) {

    }

    updateVerbs(v) {
        this.selection['root'] = v
    }

    updateAgents(a) {
        this.selection['agent'] = a;
    }

    updatePatients(p) {
        this.selection['patient'] = p;
    }

    updateAffOptions(ao) {
        this.selection['aff-option'] = ao;
    }


}
