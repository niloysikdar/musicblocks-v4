/** Type representing the allowed i18n language name strings. */
export type TI18nLang = 'en' | 'es';

/** Type representing the schema of a i18n language file which stores the individual strings. */
export type TI18nFile = {
    [component: string]: {
        [key: string]: string;
    };
};

/** Type representing an i18n function generated by i18n factory function. */
export type TI18nFunc = (key: string) => string;