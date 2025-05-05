# EveryVoice for Angular

**EveryVoice** is an Angular module that adds text-to-speech (TTS) capabilities to your application using a configurable API. Add the directive to any text in your templates and it will be spoken aloud using your pre-trained [EveryVoice model](https://everyvoice.ca).

---

## 📦 Installation

Install the package via npm:

```bash
npm install every-voice # TODO: This is not published yet
```

---

## 🚀 Getting Started

### 1. Import the Module

In your **root app module** (`app.module.ts`), import `EveryVoiceModule` using the `forRoot()` method to provide the API URL:

```ts
import { EveryVoiceModule } from "EveryVoice";

@NgModule({
  imports: [
    EveryVoiceModule.forRoot({
      apiUrl: "https://your.api/tts", // 👈 your TTS backend endpoint
      enableTTS: true, // 👈 set this to false if you want to disable your TTS in certain deployment environments
    }),
  ],
})
export class AppModule {}
```

If you use the module in a **feature module** or a **lazy-loaded module**, use `forChild()` instead:

```ts
import { EveryVoiceModule } from "EveryVoice";

@NgModule({
  imports: [EveryVoiceModule.forChild()],
})
export class FeatureModule {}
```

---

## 🗣️ Usage in Templates

Use the directive `libEveryVoice` on any element:

```html
<!-- Speak the element's inner text -->
<span libEveryVoice>Play this out loud</span>

<!-- Speak a custom string -->
<button [libEveryVoice]="'Hello world'">🔊 Click to speak</button>
```

Alternatively use the component `lib-every-voice` like so:

```html
<!-- Creates an Angular Material Icon Button which can be clicked to play [textToGenerate] -->
<lib-every-voice [textToGenerate]="'Hello world'"></lib-every-voice>
```

Lastly, you can use the EveryVoiceService to generate audio programatically:

```ts
import { EveryVoiceService } from "EveryVoice";

export class ExampleComponent {
  constructor(private tts: EveryVoiceService) {}

  onClick(text: string): Promise<void> {
    this.tts.playSound(text);
  }
}
```

---

## 🔧 Configuration

The `forRoot()` method takes a configuration object with the following structure:

```ts
interface EveryVoiceConfig {
  apiUrl: string; // The base URL for your TTS API
  enableTTS: boolean; // Whether to enable the TTS feature
}
```

---

## 🛠️ Development & Contributing

If you're using this package locally during development:

1. Build the library:

   ```bash
   ng build EveryVoice
   ```

2. Use a local path in your app’s `package.json`:

   ```json
   "EveryVoice": "file:../path/to/every-voice/dist/every-voice"
   ```

Contributions and issues are welcome — feel free to submit a pull request or open an issue!

---

## 📄 License

MIT
