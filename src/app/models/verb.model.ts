import { Affix } from './affix.model'

export interface Verb {
    gloss: string;
    required_affixes: Affix[];
    display: string;
    tag: string;
    thematic_relation: string;
    position?: Number;
}