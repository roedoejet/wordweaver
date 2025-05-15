export interface EveryVoiceConfig {
  enableTTS: boolean;
  requiresAuth: boolean;
  apiUrl?: string;
  developmentBearerToken?: string; // Optional: Token for authentication
  speakerID?: string; // Optional: Speaker ID for TTS
  diffusionSteps?: number; // Optional: Number of steps for TTS
  domain?: string; // Optional: Auth0 Domain
  clientId?: string; // Optional: Auth0 ClientId
  middlewareEndpoint?: string; // Optional: Middleware endpoint
  audience?: string; // Optional: Auth0 audience
}
export type EveryVoiceServiceStatus =
  | "INITIALIZED"
  | "READY"
  | "ERROR"
  | "GENERATING"
  | "LOADING"
  | "STOPPED"
  | "PLAYING"
  | "PAUSED";

export interface EveryVoiceServiceMiddlewareInfoResponse {
  speakers: string[];
  defaultSpeaker: string;
  defaultDiffusionSteps: number;
}
