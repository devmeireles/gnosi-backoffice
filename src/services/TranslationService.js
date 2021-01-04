import VueI18n from 'vue-i18n';

let i18n;
export default {
  initI18n(messages, languageCode) {
    const detectedLanguage = navigator.language || navigator.userLanguage;

    let detectedLanguageCode;
    if (languageCode) {
      detectedLanguageCode = languageCode;
    } else {
      switch (detectedLanguage) {
        case 'pt-BR':
          detectedLanguageCode = 'br';
          break;
        case 'es-ES':
          detectedLanguageCode = 'es';
          break;
        default:
          detectedLanguageCode = 'en';
          break;
      }
    }

    i18n = new VueI18n({
      locale: detectedLanguageCode,
      fallbackLocale: detectedLanguageCode,
      messages,
    });

    return i18n;
  },
  translate(value) {
    return i18n.t(value);
  },
};
