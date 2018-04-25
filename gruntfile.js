// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    clean: {
        build: {
            src: ['build']
        },
        grunt_bower: {
        	src: ['./assets/vendors', './node_modules']
        },
        dev: {
        	src: ['./index-dev.html']
        }
    },
    copy: {
    	main: {
    		expand: true,
    		flatten: true,
    		src: ['./assets/vendors/components-font-awesome/fonts/*', './assets/fonts/*'],
    		dest: 'build/fonts/'
    	},
    	indexCopy :{
    		expand: true, 
    		cwd: './',
    		src: ['index.html'],
    		dest: './',
    		rename: function(dest, src) {
    			return dest + 'index-dev.html';
    		}
    	},
    	devCopy:{
    		expand: true,
    		cwd: './',
    		src:['*-dev.html'],
    		rename: function() {
    			return './index.html';
    		}
    	}
    },
    bower: {
        install: {
        	options: {
        		targetDir: './assets/vendors/'
        	}
        }
    },
    useminPrepare: {
        html: ['index.html'],
        options: {
            dest: './'
        }
    },
    filerev: {
        options: {
            encoding: 'utf8',
            algorithm: 'md5',
            length: 8
        },
        js: {
        	src: ['build/js/*.js', 'build/css/*.css']
        }
    },
    usemin: {
    	html: ['index.html'],
        options: {
            blockReplacements: {
            	css: function( block ) {
            		return '<link rel="stylesheet" href="' + block.dest + '"/>';
            	},
            	js: function( block ) {
            		return '<script src="' + block.dest + '"></script>';
            	}
            }
        }
    }
  });

//Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-bower-task');

  // Prod task(s).
  grunt.registerTask('build', [
	  'clean:build',
	  'copy:main',
	  'copy:indexCopy',
	  'useminPrepare',
	  'concat:generated',
	  'cssmin:generated',
	  'uglify:generated',
	  'filerev',
	  'usemin',
	  'clean:grunt_bower'
  ]);

  // Dev task(s).
  grunt.registerTask('dev', [
	  'copy:devCopy',
	  'clean:dev',
	  'bower:install' 
  ]);
};