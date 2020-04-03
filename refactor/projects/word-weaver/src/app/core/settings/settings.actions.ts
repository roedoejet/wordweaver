import { createAction, props } from "@ngrx/store";

import { Language } from "./settings.model";

export const actionSettingsChangeLanguage = createAction(
  "[Settings] Change Language",
  props<{ language: Language }>()
);

export const actionSettingsChangeGlossLevel = createAction(
  "[Settings] Change Gloss Level",
  props<{ glossLevel: boolean }>()
);
export const actionSettingsChangeBreakdownLevel = createAction(
  "[Settings] Change Breakdown Level",
  props<{ breakdownLevel: boolean }>()
);
export const actionSettingsChangeBreakdownTranslationLevel = createAction(
  "[Settings] Change Breakdown Translation Level",
  props<{ breakdownTranslationLevel: boolean }>()
);
export const actionSettingsChangeTranslationLevel = createAction(
  "[Settings] Change Translation Level",
  props<{ translationLevel: boolean }>()
);

export const actionSettingsChangeRootHighlight = createAction(
  "[Settings] Change Root Highlight",
  props<{ rootHighlight: boolean }>()
);

export const actionSettingsChangePronounHighlight = createAction(
  "[Settings] Change Pronoun Highlight",
  props<{ pronounHighlight: boolean }>()
);

export const actionSettingsChangeAspectHighlight = createAction(
  "[Settings] Change Aspect Highlight",
  props<{ aspectHighlight: boolean }>()
);

export const actionSettingsChangePrepronominalPrefixHighlight = createAction(
  "[Settings] Change PrepronominalPrefix Highlight",
  props<{ prepronominalPrefixHighlight: boolean }>()
);

export const actionSettingsChangeTmpAffixHighlight = createAction(
  "[Settings] Change TmpAffix Highlight",
  props<{ tmpAffixHighlight: boolean }>()
);

export const actionSettingsChangePostAspectualSuffixHighlight = createAction(
  "[Settings] Change postAspectualSuffix Highlight",
  props<{ postAspectualSuffixHighlight: boolean }>()
);

export const actionSettingsChangeTestApi = createAction(
  "[Settings] Change TestApi",
  props<{ testApi: boolean }>()
);

export const actionSettingsChangeTheme = createAction(
  "[Settings] Change Theme",
  props<{ theme: string }>()
);

export const actionSettingsChangeAutoNightMode = createAction(
  "[Settings] Change Auto Night Mode",
  props<{ autoNightMode: boolean }>()
);

export const actionSettingsChangeStickyHeader = createAction(
  "[Settings] Change Sticky Header",
  props<{ stickyHeader: boolean }>()
);

export const actionSettingsChangeAnimationsPage = createAction(
  "[Settings] Change Animations Page",
  props<{ pageAnimations: boolean }>()
);

export const actionSettingsChangeAnimationsPageDisabled = createAction(
  "[Settings] Change Animations Page Disabled",
  props<{ pageAnimationsDisabled: boolean }>()
);

export const actionSettingsChangeAnimationsElements = createAction(
  "[Settings] Change Animations Elements",
  props<{ elementsAnimations: boolean }>()
);
export const actionSettingsChangeHour = createAction(
  "[Settings] Change Hours",
  props<{ hour: number }>()
);
