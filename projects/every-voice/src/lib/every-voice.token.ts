import { InjectionToken } from "@angular/core";
import { EveryVoiceConfig } from "./every-voice.config";

export const EVERY_VOICE_CONFIG = new InjectionToken<EveryVoiceConfig>(
  "EveryVoiceConfig"
);
