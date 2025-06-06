/* eslint-env node */
'use strict';

module.exports = {
  reporters: ['lcov', 'html'],
  excludes: [
    '*/templates/**/*.js',
    '*/tailwind/config/**/*.js',
    'app/tailwind/**',
    'server/**',
    'starter-files/**',
  ],
  coverageFolder: 'coverage',
  useBabelInstrumenter: true,
};
