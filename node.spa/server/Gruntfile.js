var appConfig = require('./app-config.json');

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	
	grunt.registerTask('buildTestAndRun', ['express:dev']);
	grunt.registerTask('default', ['buildTestAndRun', 'run-frontend']);
	
	grunt.registerTask('run-frontend', function () {
	    var done = this.async();
	    grunt.util.spawn({
	        grunt: true,
	        args: ['watch'],
	        opts: {
	            cwd: '../frontend'
	        }
	    }, function (err, result, code) {
	        //done();
	    });
	});
	
	grunt.initConfig({
		express: {
	    options: {
	    	port: appConfig['dev'].port
	    },
	    dev: {
	      options: {
	        script: 'index.js'
	      }
	    }
	  }
	});
};