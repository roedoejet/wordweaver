# This is where you can specify the UI language for your wordweaver app

## For a complete guide on 'internationalization' using Angular go (here)[https://angular.io/guide/i18n]

To add translations, do the following:

Duplicate the `<source/>` tag, rename it target, and then replace its content with the French greeting. If you were working with a more complex translation, you could use the information and context provided by the source, description, and meaning elements to guide your selection of the appropriate French translation.

To change the interface into a langauge that is not English or French, change the target in `messages.alt.xlf` and build using `npm run-script build-alt`. To change the French, change the target in `messages.fr.xlf` and build using `npm run-script build-fr`. English can be built directly using `npm build`.