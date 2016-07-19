$(function() {

  // updateMain();
  // window.onhashchange = updateMain();

  // Grab the template script
  var theTemplateScript = $("#teachers-index-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context=getTeachers();

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('main').html(theCompiledHtml);

});

var getTeachers = function() {
 return {teachers: [{"id":1,"name":"Hunter","created_at":"2016-06-22T09:36:59.818Z","updated_at":"2016-06-22T09:36:59.818Z"},{"id":2,"name":"Derek","created_at":"2016-06-22T09:36:59.830Z","updated_at":"2016-06-22T09:36:59.830Z"},{"id":3,"name":"Seba","created_at":"2016-06-22T09:36:59.837Z","updated_at":"2016-06-22T09:36:59.837Z"},{"id":4,"name":"Shambhavi","created_at":"2016-06-22T09:36:59.843Z","updated_at":"2016-06-22T09:36:59.843Z"},{"id":5,"name":"Ken","created_at":"2016-06-22T09:36:59.848Z","updated_at":"2016-06-22T09:36:59.848Z"},{"id":6,"name":"Walker","created_at":"2016-06-22T09:36:59.854Z","updated_at":"2016-06-22T09:36:59.854Z"},{"id":7,"name":"Julian","created_at":"2016-06-22T09:36:59.860Z","updated_at":"2016-06-22T09:36:59.860Z"},{"id":8,"name":"Jaclyn","created_at":"2016-06-22T09:36:59.866Z","updated_at":"2016-06-22T09:36:59.866Z"},{"id":9,"name":"Jen","created_at":"2016-06-22T09:36:59.871Z","updated_at":"2016-06-22T09:36:59.871Z"},{"id":10,"name":"Sherif","created_at":"2016-06-22T09:36:59.876Z","updated_at":"2016-06-22T09:36:59.876Z"}]};
};

var getTeacher = function(name) { // OR ID?
 return {"id":1,"name":"Hunter","created_at":"2016-06-22T09:36:59.818Z","updated_at":"2016-06-22T09:36:59.818Z"};
};

// var updateMain = function() {
//   var route = determineRoute();
//   renderTemplate(route);
// };

// var determineRoute = function() {
//   if (window.location.hash == "") {
//     return {route: 'teachers-index'}
//   } else {
//     return {route: 'teachers-show', teacher_name: window.location.hash.slice(1)}; // OR ID?
//   }
// };

// var renderTemplate = function(route) {
  // var theTemplateScript = $("#" + route.route + "-template").html();
  // var theTemplate = Handlebars.compile(theTemplateScript);
  // var context=getTeacher(route.teacher_name); // OR ID?
  // var theCompiledHtml = theTemplate(context);
  // $('main').html(theCompiledHtml);
// };
