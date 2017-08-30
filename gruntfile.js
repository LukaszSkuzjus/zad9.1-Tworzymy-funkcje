module.exports = function(grunt) {

  //2. krok - konfiguracja task�w
  grunt.initConfig({

    sass: {
    	options: {
      		sourceMap: true
        },
        dist: {
        	files: {
        		'css/css.css': 'sass/sass.sass'
      }
    }
  },

  imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
  },

  uglify: {
    my_target: {
    files: {
      'dest/output.min.js': 'js/*.js'
    }
    }
  },

  watch: {

	sass:{
        	files: ['sass/*.sass'],
        	tasks: ['sass'],
        	options: {
            		spawn: false,
            		livereload: true
        	},
    
	},
	imagemin: {
        	files: ['images/*.{png,jpg,gif,jpeg}'],
        	tasks: ['imagemin'],
        	options: {
            		spawn: false,
			livereload: true
        	},
    	},
	uglify: {
        	files: ['js/*.js'],
        	tasks: ['uglify'],
        	options: {
            		spawn: false,
			livereload: true
        	},
    	},


  }//koniev watch





  });

  // 1. krok -> �adowanie paczki z npm-a
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 3. W��czanie task�w
  grunt.registerTask('default', ["sass", "uglify", "imagemin","watch"]);
};