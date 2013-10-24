// Generated on 2013-10-23 using generator-angular 0.5.1
'use strict';

module.exports = function (grunt) {
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
          base: [
            'app'
          ],
          livereload: 35729
        }
      }
    }
  });

  grunt.registerTask('default', [
    'connect:livereload',
    'watch'
  ]);
};
