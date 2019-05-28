import { Level } from './level.model'

export interface Settings extends Object {
    highlight: {
        root: Boolean;
        pronoun: Boolean;
        aspect: Boolean;
        tmp_affix: Boolean;
        prepronominal_prefix: Boolean;
        post_aspectual_suffix: Boolean;
    };
    level: Level;
    test_api: Boolean;
}
