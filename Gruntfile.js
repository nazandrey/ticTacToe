// Generated on 2015-08-25 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    cordova: 'cordova/www'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,
    
    open: {
      chrome:{
        url: 'http://localhost:<%= connect.options.port %>',
        app: 'Chrome'
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      //js: {
      //  files: ['<%= yeoman.app %>/scripts/{,**/}*.js'],
      //  tasks: ['newer:jshint:all'],
      //  options: {
      //    livereload: '<%= connect.options.livereload %>'
      //  }
      //},
      //jsTest: {
      //  files: ['test/unit/{,*/}*.js'],
      //  tasks: ['newer:jshint:test', 'karma']
      //},
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,**/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: false,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          hostname: 'localhost',
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      e2eTest: {
        options: {
          port: 4444,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      cordova: {
        options: {
          open: false,
          base: '<%= yeoman.cordova %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/unit/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      cordova: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.cordova %>/{,*/}*',
            '!<%= yeoman.cordova %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      cordova: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
              detect: {
                js: /'(.*\.js)'/gi
              },
              replace: {
                js: '\'{{filePath}}\','
              }
            }
          }
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      cordova: {
        options: {
          generatedImagesDir: '<%= yeoman.cordova %>/images/generated'
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },   

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.cordova %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration         
    usemin: {
      html: ['<%= yeoman.cordova %>/{,*/}*.html'],
      css: ['<%= yeoman.cordova %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.cordova %>',
          '<%= yeoman.cordova %>/images',
          '<%= yeoman.cordova %>/styles'
        ]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      cordova: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.cordova %>/images'
        }]
      }
    },

    svgmin: {
      cordova: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.cordova %>/images'
        }]
      }
    },

    htmlmin: {
      cordova: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.cordova %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.cordova %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      cordova: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      cordova: {
        html: ['<%= yeoman.cordova %>/*.html']
      }
    },
    

    // Copies remaining files to places other tasks can use
    copy: {      
      cordova: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.cordova %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'styles/fonts/{,*/}*.*',
            'res/**/*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.cordova %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: '<%= yeoman.cordova %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      cordova: [
        'compass:cordova',
        'imagemin',
        'svgmin'
      ]
    },
    
    //cordova
    cordovacli: {
      options: {
        path: '<%= yeoman.cordova %>',
        cli: 'cordova'  // cca or cordova
      },
      init: {
        options: {
          command: ['create','platform'/*'plugin'*/],
          action: 'add',
          platforms: ['android'],
          //plugins: ['device','dialogs'],
          path: 'cordova',
          id: 'com.tictactoe.nazandr',
          name: 'TicTacToe'
        }
      },
      build_android: {
        options: {
          command: 'build',
          platforms: ['android']
        }
      },
      emulate_android: {
        options: {
          command: 'emulate',
          platforms: ['android'],
          args: ['--target','Nexus5']
        }
      }
    },
  
    // Test settings
    //unit
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        browsers: [
          "PhantomJS"
        ],
        singleRun: true
      },
      unitDebug: {
        configFile: 'test/karma.conf.js',
        browsers: [
          "Chrome"
        ],
        singleRun: false
      }
    },
    
    

    //e2e
    protractor: {
      options: {
        configFile: "test/e2e.conf.js",
        keepAlive: true
      },
      run: {
        options:{
          configFile: "test/e2e_fast.conf.js",
        }        
      },
      debug: {
        options: {
          debug: true
        }
      }
    },
    
    webdriver: {
      options: {
        startCommand: "./node_modules/protractor/bin/webdriver-manager start"
      },
      start: {
        
      },
    },
    
    
    protractor_webdriver: {
      options: {
        keepAlive: true
      },
      start: {
        // Target-specific file lists and/or options go here. 
      },
    },
    
    shell: {
      options: {
        
      },
      webdriver: {
        command: 'start "Selenium Server" grunt launchWebdriver',
        options: {
        
        }        
      }
    },
    
    confirm: {
      launchWebdriver:{
        options: {
          // Static text. 
          question: 'Do you want launch Selenium Server?',
          input: '_key:y'
        }
      },
      webdriver: {
        options: {
          // Static text. 
          question: 'Check Selenium Server. Is it running?'
        }
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'cordova') {
      return grunt.task.run(['build', 'connect:cordova:keepalive']);    
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });
    
  grunt.registerTask('test', function(mode){
    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:test',
      'autoprefixer',
      'connect:test',
      'karma:unit' + (mode === 'debug' ? 'Debug' : '')
    ]);
  });
  
  grunt.registerTask('debugTest', [
    'clean:server',
    'wiredep',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma:unit'
  ]);
  
  grunt.registerTask('launchWebdriver', [
    'protractor_webdriver:start',
    'keepalive'
  ]);
  
  grunt.registerTask('webdriver', [
    'shell:webdriver'
  ]);  
  
  grunt.registerTask('e2eTest', function(mode){  
    grunt.task.run([
      'confirm:webdriver',
      'clean:server',
      'wiredep',
      'concurrent:test',
      'autoprefixer',
      'connect:test',
      'protractor:' + (mode || 'run')
    ]);    
  });    
  
  grunt.registerTask('cordovaInit', [
    'cordovacli:init',
    'build'
  ]);
  
  grunt.registerTask('build', [
    'clean:cordova',
    'wiredep',
    'useminPrepare',
    'concurrent:cordova',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:cordova',
    'cdnify',
    'cssmin',
    'uglify',
    //'filerev',
    'usemin',
    'htmlmin',
    'cordovacli:build_android'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
