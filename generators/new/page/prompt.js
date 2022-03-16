module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (value.length === 0) {
        return 'View components must have a name.';
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'useStyles',
    message: 'Add <style> block?',
  },
  {
    type: 'confirm',
    name: 'useI18n',
    message: 'Setup i18n?',
  },
];
