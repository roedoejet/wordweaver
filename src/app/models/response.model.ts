export interface ResponseObject {
    position: number;
    value: string;
    tag?: string;
    type?: string;
    agent?: string;
    patient?: string;
}

export interface ResponseValue {
    affixes: ResponseObject;
    pronoun: ResponseObject;
    root: ResponseObject;
    affopt: string;
}

export interface Response {
    values: ResponseValue[];
    tag?: object;
    marker?: string;
    plain_text?: string;
    translation?: string;
}
