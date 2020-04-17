import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";

import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { uniq } from "lodash";

import { AffixService } from "../affix/affix.service";
import { PronounService } from "../pronoun/pronoun.service";
import { Affix, AffOption, Pronoun, Verb } from "../../models/models";
import { VerbService } from "../verb/verb.service";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { SettingsState, State } from "../settings/settings.model";
import { selectSettings } from "../settings/settings.selectors";

import {
  Conjugation,
  ResponseObject,
  // ResponseValue,
  Response
} from "../../models/models";

@Injectable({
  providedIn: "root"
})
export class ConjugationService {
  path = environment.base + environment.prefix + `conjugations`;
  test_path = environment.base + environment.test_prefix + `conjugations`;
  conjugations$ = this.http.get<Conjugation[]>(this.path);
  settings$: Observable<SettingsState>;
  errorTier: any = `Oh no! We couldn't conjugate this. 
  Please make sure you're connected to the internet and try again.
  If the problem keeps happening, please contact us!`;
  tiers;
  constructor(
    private http: HttpClient,
    private affixService: AffixService,
    private verbService: VerbService,
    private pronounService: PronounService,
    private store: Store<State>
  ) {
    this.settings$ = this.store.pipe(select(selectSettings));
  }

  createRequestUrl(tableargs, optional?: object[]) {
    let params = new HttpParams();
    const agents = tableargs["agent"];
    const patients = tableargs["patient"];
    const afftags = tableargs["option"];
    const verbtags = tableargs["root"];
    if (agents) {
      agents.forEach(agent => {
        if (agent) {
          params = params.append("agent", agent);
        }
      });
    }
    if (patients) {
      patients.forEach(patient => {
        if (patient) {
          params = params.append("patient", patient);
        }
      });
    }
    if (afftags) {
      afftags.forEach(afftag => {
        if (afftag) {
          params = params.append("option", afftag);
        }
      });
    }
    if (verbtags) {
      verbtags.forEach(verbtag => {
        if (verbtag) {
          params = params.append("root", verbtag);
        }
      });
    }
    if (optional) {
      optional.forEach(option => {
        if (option) {
          params = params.append(option["param"], option["value"]);
        }
      });
    }
    return params;
  }

  conjugate(tableargs, optional?: object[]) {
    const params = this.createRequestUrl(tableargs, optional);
    let path = this.path;
    return this.settings$.pipe(
      switchMap(settings => {
        if (settings.testApi) {
          path = this.test_path;
        }
        return this.http.get(path, { params: params }).pipe(
          catchError(err => {
            return of(err.error.message);
          })
        );
      })
    );
  }

  conjugateTable(tableargs, test?) {
    return this.conjugate(tableargs, (test = test)).pipe(
      map(res => {
        if (typeof res === "string") {
          // return error as string
          return res;
        } else {
          return this.createTiers(res);
        }
      })
    );
  }

  // returnAffopts(res: Response) {
  //   let affopts = [];
  //   res["values"].forEach(conjugation => {
  //     affopts.push(conjugation.option);
  //   });
  //   affopts = uniq(affopts);
  //   affopts = affopts.map(a => {
  //     return { name: a };
  //   });
  //   return affopts;
  // }

  returnPros(res: any, v) {
    let pronouns = [];
    res.values.forEach(conjugation => {
      if (conjugation.root["tag"] === v) {
        const vb = this.verbService.getVerb(v);
        if (vb["thematic_relation"] === "red") {
          pronouns.push(
            this.pronounService.getPronoun(conjugation.pronoun["agent"])[
              "gloss"
            ]
          );
        } else if (vb["thematic_relation"] === "blue") {
          pronouns.push(
            this.pronounService.getPronoun(conjugation.pronoun["patient"])[
              "gloss"
            ]
          );
        } else {
          pronouns.push(
            this.pronounService.getPronoun(conjugation.pronoun["agent"])[
              "gloss"
            ] +
              " > " +
              this.pronounService.getPronoun(conjugation.pronoun["patient"])[
                "obj_gloss"
              ]
          );
        }
      }
    });
    pronouns = uniq(pronouns);
    pronouns = pronouns.map(a => {
      return { name: a };
    });
    return pronouns;
  }

  // returnValue(conjugation: ResponseValue) {
  //   let morphemes = [conjugation.root, conjugation.pronoun].concat(
  //     conjugation.affixes
  //   );
  //   morphemes = morphemes.sort(function(a: ResponseObject, b: ResponseObject) {
  //     return a.position - b.position;
  //   });
  //   return morphemes.map(m => m.value).join("");
  // }

  // Determine if object is null or has any null properties. Intended for Agent and Patient
  hasNull(target: object): boolean {
    if (target) {
      for (const member in target) {
        if (target[member] == null) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }

  // Return 'agent' or 'patient' or both
  determinePNType(conjugation, verb_role: string): string[] {
    const pn_roles = [];

    if (verb_role === "red") {
      pn_roles.push("agent");
    } else if (verb_role === "blue") {
      pn_roles.push("patient");
    } else {
      pn_roles.push("agent");
      pn_roles.push("patient");
    }
    return pn_roles;
  }

  // This is an old recycled function and is very awkward. Should be changed.
  createTiers(conjugations) {
    return conjugations.map(conjugation => {
      const index = conjugations.indexOf(conjugation);
      const values = conjugation.values;
      return {
        main: this.createTier(
          values,
          { keys: ["value"], seperator: "" },
          { keys: ["value"], seperator: "" },
          { keys: ["value"], seperator: "" }
        ),

        secondary: this.createTier(
          values,
          { keys: [" root"], seperator: "" },
          {
            keys: ["agent", "patient"],
            seperator: " > "
          },
          { keys: ["gloss"], seperator: "" }
        ),

        ternary: this.createTier(
          values,
          { keys: ["gloss"], seperator: "" },
          {
            keys: ["gloss", "obj_gloss"],
            seperator: " > "
          },
          { keys: ["gloss"], seperator: "" }
        ),
        translation: conjugations[index]["translation"],
        error: this.errorTier,
        option: values["option"],
        pronoun: values["pronoun"]
      };
    });
  }

  createTier(conjugation, verb_key_obj, pn_key_obj, aff_key_obj) {
    console.log(conjugation);
    // use key_obj whose condition key is true
    const verb_role = this.verbService.getVerb(conjugation["root"]["tag"])[
      "thematic_relation"
    ];
    // PN
    const pronoun_role = this.determinePNType(conjugation, verb_role);
    if (
      pronoun_role.indexOf("agent") > -1 &&
      pronoun_role.indexOf("patient") > -1
    ) {
      conjugation.pronoun["gloss"] = this.pronounService.getPronoun(
        conjugation.pronoun["agent"]
      )["gloss"];
      conjugation.pronoun["obj_gloss"] = this.pronounService.getPronoun(
        conjugation.pronoun["patient"]
      )["obj_gloss"];
    } else if (pronoun_role.indexOf("agent") > -1) {
      conjugation.pronoun["gloss"] = this.pronounService.getPronoun(
        conjugation.pronoun["agent"]
      )["gloss"];
    } else {
      conjugation.pronoun["gloss"] = this.pronounService.getPronoun(
        conjugation.pronoun["patient"]
      )["gloss"];
    }
    const pn_keys = pn_key_obj["keys"];
    let pronoun_value;
    if (pronoun_role.length > 1) {
      pronoun_value = pn_keys
        .map(key => {
          return conjugation.pronoun[key];
        })
        .join(pn_key_obj["seperator"]);
    } else {
      if (conjugation.pronoun.hasOwnProperty(pn_keys[0])) {
        pronoun_value = conjugation.pronoun[pn_keys[0]];
      } else {
        pronoun_value = pn_keys[0];
      }
    }
    let pronoun_role_css = pronoun_role;

    // This should be pulled out into the API. This is Kawennonnis-specific.
    if (
      (verb_role === "red" &&
        conjugation["affixes"].filter(x => x.tag === "perf").length > 0) ||
      (conjugation["affixes"].filter(x => x.tag === "stative").length > 0 &&
        conjugation["root"]["tag"].endsWith("perf-r"))
    ) {
      pronoun_role_css = ["patient"];
    }

    // But it should give Agent if it's there, else Patient
    const pronoun_obj = {
      position: conjugation["pronoun"]["position"],
      value: pronoun_value,
      classes: [pronoun_role_css.join(" "), "pronoun"].join(" "),
      type: "pronoun"
    };

    // Verb
    conjugation.root["gloss"] = this.verbService.getVerb(
      conjugation.root["tag"]
    )["gloss"];
    const verb_value = verb_key_obj["keys"]
      .map(key => {
        // if the key exists in the conjugation provided, return the value
        if (conjugation.root.hasOwnProperty(key)) {
          return conjugation.root[key];
          // else return the key
        } else {
          return key;
        }
      })
      .join(verb_key_obj["seperator"]);

    const verb_root_obj = {
      position: conjugation["root"]["position"],
      value: verb_value,
      classes: ["root"].join(" "),
      type: "root"
    };

    // Affixes
    const affixes = [];
    conjugation.affixes.forEach(morpheme => {
      if (morpheme != null) {
        morpheme["class"] = morpheme["type"];
        morpheme["gloss"] = this.affixService.getAffix(morpheme["tag"])[
          "gloss"
        ];
        affixes.push(morpheme);
      }
    });

    // Add non-null affix html to affixes_html_arr
    const affixes_obj_arr = [];
    affixes.forEach(affix => {
      if (affix.value != null && affix.value !== "") {
        const aff_value = aff_key_obj["keys"]
          .map(key => {
            // if the key exists in the conjugation provided, return the value
            if (affix.hasOwnProperty(key)) {
              return affix[key];
              // else return the key
            } else {
              return key;
            }
          })
          .join(aff_key_obj["seperator"]);

        affixes_obj_arr.push({
          position: affix.position,
          value: aff_value,
          classes: [affix["class"]].join(" "),
          type: affix["type"]
        });
      }
    });

    // Sort elements
    const tier_arr = [pronoun_obj, verb_root_obj].concat(affixes_obj_arr);
    tier_arr.sort((a: any, b: any) => a["position"] - b["position"]);
    return tier_arr;
  }
}
