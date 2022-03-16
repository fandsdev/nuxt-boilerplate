module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (value.length === 0) {
        return 'Utility functions must have a name.';
      }
      return true;
    },
  },
];
