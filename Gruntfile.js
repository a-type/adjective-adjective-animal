'use strict';

module.exports = function (grunt) {
  var _ = grunt.util._;

  var sourceFiles = ['*.js', 'lib/**/*.js'];
  var testFiles = ['test/**/*.js'];
  var jsFiles = sourceFiles.concat(testFiles);

  grunt.initConfig({
    mochaIstanbul: {
      coverage: {
        src: 'test',
        options: {
          check: {
            statements: 100,
            branches: 100,
            lines: 100,
            functions: 100,
          },

          mask: '**/*_spec.js',
          recursive: true,
        },
      },
    },

    browserify: {
      big: {
        files: {
          'dist/adjective-adjective-animal.js': ['lib/index.js'],
        },
        options: {
          browserifyOptions: {
            standalone: 'adjAdjAnimal',
          },
        },
      },

      small: {
        files: {
          'dist/adjective-adjective-animal.min.js': ['lib/index.js'],
        },
        options: {
          transform: ['uglifyify'],
          browserifyOptions: {
            standalone: 'adjAdjAnimal',
          },
        },
      },
    },

    clean: ['coverage'],
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-browserify');

  // Rename tasks
  grunt.task.renameTask('mocha_istanbul', 'mochaIstanbul');

  // Register tasks
  grunt.registerTask('test', ['clean', 'mochaIstanbul:coverage']);
  grunt.registerTask('build', 'Build for Bower', [
    'browserify:big',
    'browserify:small',
  ]);
  grunt.registerTask('default', ['test']);
};
