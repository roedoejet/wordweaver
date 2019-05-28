export interface Affix {
    gloss: string;
    morphemes: {'value': string, 'position': Number}[];
    tag: string;
    type: "aspect"|"prepronominal_prefix"|"derivational_suffix"|"post_aspectual_suffix"|"tmp_affix";
}