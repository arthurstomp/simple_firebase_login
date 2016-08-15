module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      browserify: {
        files: ['js/**/*.js'],
        tasks: ['browserify']
      }
    },

    browserify: {
      dist: {
        options: {
          transform: [['babelify', {presets: ['es2015', 'react']}]]
        },
        src: ['js/login.js'],
        dest: 'public/js/app.js'
      }
    }

  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-browserify')

  grunt.registerTask('default', ['browserify'])
}
