export interface EveryVoiceConfig {
  apiUrl: string;
  enableTTS: boolean;
  requiresAuth: boolean;
  bearerToken?: string; // Optional: Token for authentication
  speakerID?: string; // Optional: Speaker ID for TTS
  steps?: number; // Optional: Number of steps for TTS
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
