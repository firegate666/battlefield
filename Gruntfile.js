module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {

				},
				files: {
					"public/css/styles.css" : "assets/less/styles.less"
				}
			}
		},
		watch: {
			less: {
				files: ['assets/less/**/*.less'],
				tasks: ['less:development'],
				options: {

				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', []);
};
