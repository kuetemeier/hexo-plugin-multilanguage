WARNING - WORK IN PROGRESS
==========================

This is a Alpha Version - just work in Progress. Be patient for a few days or use on your own risk.

hexo-plugin-multilanguage
=========================

This plugin adds multilanguage features to the [HEXO](http://hexo.io/) blog framework.

## Documentation

... follows

see also

- https://github.com/hexojs/hexo/pull/831
- https://github.com/hexojs/hexo/pull/827


How to build a HEXO multilanguage site
======================================

## Install dependencies

### Install [Alias generator](https://github.com/hexojs/hexo-generator-alias)

Optional: if you like to enable redirects, e.g. `http://your-site.domain/` to `http://your-site.domain/lang/`

```
npm install hexo-generator-alias --save
```

### Usage

in `_config.yml` - replace `lang` with your default language

```
alias:
  lang/index.html: /index.html
```



