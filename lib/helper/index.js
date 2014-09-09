/*
 *
 * https://github.com/jkuetemeier/hexo-plugin-multilanguage
 *
 * Copyright (c) 2014 Jörg Kütemeier
 * Licensed under the MIT license.
 */

'use strict';

var helper = hexo.extend.helper;
var transform = require('./transform');

for (var key in transform) {
  helper.register(key, transform[key]);
}
