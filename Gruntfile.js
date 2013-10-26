// Generated on 2013-10-23 using generator-angular 0.5.1
'use strict';

module.exports = function (grunt) {
  var http = require('http'),
    to_json = require('xmljson').to_json;

  var proxy = function (req, res, next){
    if(req.url.indexOf('/yr/') == 0){
      var body = '';
      http.get({
        host: 'www.yr.no',
        path: req.url.slice(3).replace('json','xml')
      }, function(xmlRes){
        xmlRes.on('data', function(chunk){
          body += chunk;
        });
        xmlRes.on('end', function (){
          to_json(body, function (error, data){
            res.writeHead(200, {
              'Content-Type': 'application/json; charset=utf-8',
              'Access-Control-Allow-Origin': 'http://localhost'
            });
            res.end(JSON.stringify(data));
          });
        });
      });
    }else{
      next();
    }
  }

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.livereload.options.livereload %>'
        },
        files: [
          'app/{,*/}*.html',
          'app/scripts/{,*/}*.js',
          'app/styles/{,*/}*.css',
          'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: 'app',
          livereload: 35729,
          middleware: function(connect, options){
              return [
                proxy,
                connect.static(options.base)
              ];
          }
        }
      }
    }
  });

  grunt.registerTask('default', [
    'connect:livereload',
    'watch'
  ]);
};
