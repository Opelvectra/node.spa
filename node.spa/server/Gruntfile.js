var appConfig = require('./app-config.json');

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	
	grunt.registerTask('buildTestAndRun', ['copy:useExternalFrontend', 'express:dev']);
	grunt.registerTask('default', ['buildTestAndRun', 'watch:frontendChanges']);
	
	grunt.initConfig({
		copy: {
			useExternalFrontend: {
		    expand: true,
		    // full path to front-end build
		    cwd: '../frontend/build',
		    src: ['**'],
		    dest: 'public/'
		  }
		},
		express: {
	    options: {
	    	port: appConfig['dev'].port
	    },
	    dev: {
	      options: {
	        script: 'index.js'
	      }
	    }
	  },
		watch: {
		  frontendChanges: {
		    files: ['../frontend/**'],
		    tasks: ['copy:useExternalFrontend']		    
		  }
		}
	});
};