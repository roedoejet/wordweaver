export interface EveryVoiceConfig {
  apiUrl: string;
  enableTTS: boolean;
  bearerToken?: string; // Optional: Token for authentication
  speakerID?: string; // Optional: Speaker ID for TTS
  steps?: number; // Optional: Number of steps for TTS
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
