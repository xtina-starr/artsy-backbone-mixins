// Generated by CoffeeScript 1.9.3
(function() {
  var _, marked, renderer, stripTags;

  _ = require('underscore');

  marked = require('marked');

  renderer = new marked.Renderer;

  stripTags = function(str) {
    if (str == null) {
      return '';
    }
    return String(str).replace(/<\/?[^>]+>/g, '');
  };

  module.exports = {
    mdToHtml: function(attr, options) {
      if (options == null) {
        options = {};
      }
      marked.setOptions(_.defaults(options, {
        renderer: renderer,
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartypants: false
      }));
      return marked(this.get(attr) || '');
    },
    mdToHtmlToText: function(attr) {
      return stripTags(this.mdToHtml(attr));
    },
    htmlToText: function(attr) {
      return stripTags(this.get(attr));
    }
  };

}).call(this);
