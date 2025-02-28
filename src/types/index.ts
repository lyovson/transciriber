/**
 * Result from the ElevenLabs transcription API
 */
export type TranscriptionResult = {
  text: string
}

/**
 * Configuration for the transcription service
 */
export type TranscriptionConfig = {
  modelId: string
  tagAudioEvents: boolean
  languageCode: string
  diarize: boolean
  apiKey?: string
}

/**
 * Environment variables structure
 */
export type EnvVars = {
  ELEVENLABS_API_KEY: string
  CHUNK_DURATION?: string
  INPUT_DIR?: string
  OUTPUT_DIR?: string
  LANGUAGE?: string
}

/**
 * Generic Result type for functional error handling
 */
export type Result<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E }
