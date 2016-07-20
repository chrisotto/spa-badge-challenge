// If we avoid use of jQuery, we can remove the $ and just put the script tag immediately before </body>
$(function() {
  loadView();
  window.onhashchange = function(){loadView()};
});

var loadView = function() {
  renderTemplate(getViewWithContext());
};

var getViewWithContext = function() {
  locationHash = window.location.hash; // Combine this with if statement on next line, change var to name (from locationHash) and slice off the #
  if (locationHash == "") {
    return {
      template: '#teachers-index-template',
      context: getTeachers()
    }
  } else {
    return {
      template: '#teachers-show-template',
      context: getTeachers() // Change to getTeacher() (or whatever the context needs to be for the show page);  use locationHash.slice(1) (i.e. name) as argument to identify correct teacher.
    };
  }
};

var renderTemplate = function(view) {
  var theTemplateScript = $(view.template).html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var context = view.context;
  var theCompiledHtml = theTemplate(context);
  $('main').html(theCompiledHtml);
};

var getTeachers = function() {
  return {teachers: [{"id":1,"name":"Hunter","created_at":"2016-06-22T09:36:59.818Z","updated_at":"2016-06-22T09:36:59.818Z"},{"id":2,"name":"Derek","created_at":"2016-06-22T09:36:59.830Z","updated_at":"2016-06-22T09:36:59.830Z"},{"id":3,"name":"Seba","created_at":"2016-06-22T09:36:59.837Z","updated_at":"2016-06-22T09:36:59.837Z"},{"id":4,"name":"Shambhavi","created_at":"2016-06-22T09:36:59.843Z","updated_at":"2016-06-22T09:36:59.843Z"},{"id":5,"name":"Ken","created_at":"2016-06-22T09:36:59.848Z","updated_at":"2016-06-22T09:36:59.848Z"},{"id":6,"name":"Walker","created_at":"2016-06-22T09:36:59.854Z","updated_at":"2016-06-22T09:36:59.854Z"},{"id":7,"name":"Julian","created_at":"2016-06-22T09:36:59.860Z","updated_at":"2016-06-22T09:36:59.860Z"},{"id":8,"name":"Jaclyn","created_at":"2016-06-22T09:36:59.866Z","updated_at":"2016-06-22T09:36:59.866Z"},{"id":9,"name":"Jen","created_at":"2016-06-22T09:36:59.871Z","updated_at":"2016-06-22T09:36:59.871Z"},{"id":10,"name":"Sherif","created_at":"2016-06-22T09:36:59.876Z","updated_at":"2016-06-22T09:36:59.876Z"}]};
};
