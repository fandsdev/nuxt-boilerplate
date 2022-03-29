import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { LOCALE } from '~/constants/i18n';

Vue.use(VueI18n);

export default ({ app }) => {
  // eslint-disable-next-line no-param-reassign
  app.i18n = new VueI18n({
    locale: LOCALE,
    fallbackLocale: LOCALE,
  });
};
