Package.describe({
  name: 'infinitedev:dnscache',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for NPM module dnscache - speed up DNS lookups instantly',
  // URL to the Git repository containing the source code for this package.
  git: 'https://www.github.com/infinitedg',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('dnscache.js', 'server');
  api.export('DNSCACHE','server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('infinitedev:dnscache');
  api.addFiles('dnscache-tests.js', 'server');
});


Npm.depends({
  dnscache: "0.0.3"
});
