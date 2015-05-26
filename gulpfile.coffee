gulp = require 'gulp'
$ = require('gulp-load-plugins')() # injecting gulp-* plugin

gulp.task 'default', ->
  options = {
    filename: 'fui-template.js'
    standalone: true
    module: 'fui.template'
    root: 'views/directive_templates/'
  }

  gulp.src 'views/directive_templates/*.html'
  .pipe $.minifyHtml()
  .pipe $.angularTemplatecache(options)
  .pipe gulp.dest('./')
