/*global describe,it*/
'use strict';

var Hexo = require('hexo');
global.hexo = new Hexo(__dirname, {silent: true});


require('../index.js');

var expect = require('chai').expect,
  should = require('chai').should();

// jshint
should.should.exists;

describe('hexo', function() {
  it('should be functional', function() {
    should.exist(hexo);
    should.exist(hexo.extend);
    should.exist(hexo.extend.helper);
    expect(hexo.extend.helper.register).to.be.an('function');
    expect(hexo.extend.helper.list).to.be.an('function');
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
