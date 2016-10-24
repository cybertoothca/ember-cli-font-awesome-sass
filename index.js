/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-font-awesome-sass',
  included: function (app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/font-awesome/fonts/FontAwesome.otf',
      { destDir: 'assets/font-awesome/fonts' });
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.eot',
      { destDir: 'assets/font-awesome/fonts' });
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.svg',
      { destDir: 'assets/font-awesome/fonts' });
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf',
      { destDir: 'assets/font-awesome/fonts' });
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff',
      { destDir: 'assets/font-awesome/fonts' });
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff2',
      { destDir: 'assets/font-awesome/fonts' });
  }
};
