'use strict';

var util = require('util');
var _ = require('lodash');
var logger = require('logentries-logformat')('suite-sdk');

var Base = require('../_base');

var Settings = function(request, options) {
  Base.call(this, options);
  this._request = request;
};

util.inherits(Settings, Base);

_.extend(Settings.prototype, {

  getSettings: function(payload, options) {
    logger.log('settings_get_settings');

    return this._request.get(
      this._getCustomerId(options),
      this._buildUrl('/settings', payload),
      options
    );
  },


  getCorporateDomains: function(payload, options) {
    logger.log('settings_get_corporate_domains');

    return this._request.get(
      this._getCustomerId(options),
      this._buildUrl('/settings/corporatedomain', payload),
      options
    );
  },


  setCorporateDomains: function(payload, options) {
    logger.log('settings_set_corporate_domains');

    return this._request.put(
      this._getCustomerId(options),
      '/settings/corporatedomain',
      payload,
      options
    );
  }

});

Settings.create = function(request, options) {
  return new Settings(request, options);
};

module.exports = Settings;
