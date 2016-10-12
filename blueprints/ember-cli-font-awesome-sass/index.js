/*jshint node:true*/
module.exports = {
  description: '',

  afterInstall: function(options) {
    return Ember.RSVP.all([
      this.addAddonToProject('ember-cli-sass'),
      this.addBowerPackageToProject('font-awesome')
    ]);
  }
};
