import { Pronoun } from './pronoun.model'
import { Affix } from './affix.model'
import { AffOption } from './aff.combination.model'
import { Noun } from './noun.model'
import { Verb } from './verb.model'

export interface Conjugation extends Object {
    affixes: Affix[];
    aff_option: AffOption;
    agent: Pronoun | Noun | null;
    patient: Pronoun | Noun | null;
    verb: Verb;
}
