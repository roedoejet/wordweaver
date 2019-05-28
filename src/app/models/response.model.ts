import { Verb } from './verb.model'

// export interface Response {
//     translation: String;
//     verb: Verb;
// }

export interface responseObject {
    position: Number,
    value: string
}

export interface Response {
    affixes: responseObject,
    pronoun: responseObject,
    root: responseObject,
}