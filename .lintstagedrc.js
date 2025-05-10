module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write', () => 'tsc --noEmit'],
  '**/*.{json,md}': ['prettier --write'],
  '**/*.css': ['stylelint --fix', 'prettier --write'],
};
