import { InjectionToken } from "@angular/core";
import { EveryVoiceConfig } from "./every-voice.config";
import { AuthService } from "@auth0/auth0-angular";

export const EVERY_VOICE_CONFIG = new InjectionToken<EveryVoiceConfig>(
  "EveryVoiceConfig"
);

export const AUTH0_INSTANCE = new InjectionToken<AuthService>("AUTH0_INSTANCE");
