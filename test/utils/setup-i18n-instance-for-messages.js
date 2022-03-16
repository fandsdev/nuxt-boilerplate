import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { LOCALE } from '~/constants/i18n';

Vue.use(VueI18n);

export function setupI18nInstanceForMessages(messages) {
  return new VueI18n({ messages, locale: LOCALE, fallbackLocale: LOCALE });
}
