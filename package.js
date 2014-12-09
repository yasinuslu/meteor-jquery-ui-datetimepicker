Package.describe({
  name: 'yasinuslu:datetimepicker',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles([
    'lib/jquery-ui-timepicker-addon.css',
    'lib/jquery-ui-timepicker-addon.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yasinuslu:datetimepicker');
});