/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function () {
  },
  afterInstall: function(options) {
    return this.addAddonToProject('ember-cli-sass')
      .then(() => {
        return this.addBowerPackageToProject('font-awesome');
      })
  }
};
