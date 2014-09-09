/*
 *
 * https://github.com/jkuetemeier/hexo-plugin-multilanguage
 *
 * Copyright (c) 2014 Jörg Kütemeier
 * Licensed under the MIT license.
 */

'use strict';

var fake_hexo = {
  extend: {

    helper: {
      _reg: {},

      register: function(key, f) {
        console.log("Fake register: " + key);

        fake_hexo.extend.helper._reg[key] = f;
        // do nothing
      },
      list: function() {
        return fake_hexo.extend.helper._reg;
      }
    }
  }
};

module.exports = fake_hexo;
