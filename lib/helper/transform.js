/*
 *
 * https://github.com/jkuetemeier/hexo-plugin-multilanguage
 *
 * Copyright (c) 2014 Jörg Kütemeier
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {

  /**
   * prefix categories with 'category_'
   */
  category_transform: function(helper, lang) {
    var f = function(s) {
      return helper('category_'+s, lang);
    };
    return f;
  },

  /**
   * prefix tags with 'tag_'
   */
  tag_transform: function(helper) {
    var f = function(s) {
      return helper('tag_'+s);
    };
    return f;
  }

};


