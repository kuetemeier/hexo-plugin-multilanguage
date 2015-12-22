/*global describe,it*/
'use strict';

var Hexo = require('hexo');
var hexo = new Hexo(__dirname, {silent: true});


require('../index.js');

var expect = require('chai').expect,
  should = require('chai').should();

// jshint
should.should.exists;

describe('hexo', function() {
  it('should be functional', function() {
    should.exist(hexo);
    hexo.extend.should.exists;
    hexo.extend.helper.should.exists;
    hexo.extend.helper.register.should.be.a.function;
    hexo.extend.helper.list.should.be.a.function;
    expect('hexo').to.exists;
  });
});


describe('hexo-plugin-multilanguage', function() {
  var helper = hexo.extend.helper;

  describe('should register helper', function() {
    it('register category_transform', function() {
      should.exist(helper.get('category_transform'));
      should.exist(helper.get('tag_transform'));
    });
  });

  var no_transform = function(value) { return value; };

  describe('helper.category_transform', function() {
    var ct = helper.get('category_transform');

    it('prefixes category_', function() {
      var result = ct(no_transform)('test');
      result.should.be.a('string');
      result.should.equal('category_test');
    });
  });

  describe('helper.tag_transform', function() {
    var tt = helper.get('tag_transform');

    it('prefixes tag_', function() {
      var result = tt(no_transform)('test');
      result.should.be.a('string');
      result.should.equal('tag_test');
    });
  });

});
