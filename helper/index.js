var helper = hexo.extend.helper;
var transform = require('./transform');

for (var key in transform) helper.register(key, transform[key]);
