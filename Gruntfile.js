module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Project configuration.
  grunt.initConfig({
    
    less: {
      style: {
        files: {
          "main.css": "less/style.less"
        }
      }
    },

	  watch: {
  	  options: { 
  	  	livereload: true, 
  	  },
	  
	  style: {
	  	files: ['less/components/*.less'],
	    tasks: ['less'],
	    options: {
	      spawn: false,
	    },
	  },
	},

	
  });

};