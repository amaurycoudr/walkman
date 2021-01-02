import i18n, {
    LanguageDetectorAsyncModule,
    Services,
    InitOptions,
} from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';

import * as Localization from 'expo-localization';

import en from './en'
import fr from "./fr";

export const AVAILABLE_LANGUAGES = {
  en,
  fr,
};

const languageDetector: LanguageDetectorAsyncModule = {
    type: 'languageDetector',
    // If this is set to true, your detect function receives a callback function that you should call with your language,
    //useful to retrieve your language stored in AsyncStorage for example
    async: true,
    init: (
        _services: Services,
        _detectorOptions: object,
        _i18nextOptions: InitOptions,
    ) => {
        /* use services and options */
    },
    detect: (callback: (lng: string) => void) => {
        AsyncStorage.getItem('APP_LANG', (err, lng) => {
            // Error fetching stored data or no language was stored
            const language = Localization.locale;
            callback(language.includes('fr') ? 'fr' : 'en');
            return;
        });
    },
    cacheUserLanguage: (lng: string) => {
        AsyncStorage.setItem('APP_LANG', lng);
    },
};

i18n
    .use(languageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: AVAILABLE_LANGUAGES,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
    });