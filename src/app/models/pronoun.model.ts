export interface Pronoun {
    gender: "M"|"F"|"FZ"|"N"|"";
    gloss: string;
    inclusivity: "incl"|"excl"|"";
    number: "SG"|"DL"|"PL";
    role: "agent"|"patient"|"";
    obj_gloss: string;
    person: "1"|"2"|"3";
    value: string;
    position?: Number;
    tag: string;
}