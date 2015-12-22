/*
 *
 * https://github.com/jkuetemeier/hexo-plugin-multilanguage
 *
 * Copyright (c) 2014 Jörg Kütemeier
 * Licensed under the MIT license.
 */
'use strict';

var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

var transformers =  {
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

Object.keys(transformers).forEach(function(key){
  hexo.extend.helper.register(key, transformers[key]);
});

module.exports = transformers;
