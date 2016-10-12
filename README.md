# ember-cli-font-awesome-sass

[![npm version](https://badge.fury.io/js/ember-cli-font-awesome-sass.svg)](https://badge.fury.io/js/ember-cli-font-awesome-sass) [![Build Status](https://travis-ci.org/cybertoothca/ember-cli-font-awesome-sass.svg)](https://travis-ci.org/cybertoothca/ember-cli-font-awesome-sass) [![Code Climate](https://codeclimate.com/github/cybertoothca/ember-cli-font-awesome-sass/badges/gpa.svg)](https://codeclimate.com/github/cybertoothca/ember-cli-font-awesome-sass) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-font-awesome-sass.svg)](http://emberobserver.com/addons/ember-cli-font-awesome-sass) [![License](https://img.shields.io/npm/l/ember-cli-font-awesome-sass.svg)](LICENSE.md)

This addon installs font-awesome fonts files and sets you up to compile the
font-awesome sass into your app.  Understand that this addon is for Ember
applications that are compiling their styles using SASS.  __If your Ember
application is using pure CSS or LESS, than this addon is not for you.__

This addon will make sure that the latest version of the
[`ember-cli-sass` Ember Addon](https://github.com/aexmachina/ember-cli-sass) is
install.  In addition, the latest version of the
[`font-awesome` library](http://fontawesome.io/) from bower will be installed
in order to copy over the fonts and consume the SASS source.

## Installation

Installation is basically two simple steps: one install the addon and two
import the SASS source into your `app.scss` file.

The following will install this addon along with the font-awesome source and
fonts:

    $ ember install ember-cli-font-awesome-sass

Next, inside your `app/styles/app.scss` file you must compile the font-awesome
source into your application's stylesheet:

    // `app/styles/app.scss`
    ...
    @import "ember-cli-font-awesome-sass";
    ...

### Troubleshooting And Tips

1. You need `ember-cli-sass` to be configured in your application.  This means
that by default your styles have been compiled inside your
`app/styles/app.scss` file.  If you've adjusted the configuration to use a
different file, then you must add the `@import "ember-cli-font-awesome-sass"`
directive there.
1. As font-awesome version updates are made available, simply reinstall your
bower packages and in some cases update your `bower.json` to ensure the version
you want is being brought into your application.

---

# Ember Addon Building And Testing

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
