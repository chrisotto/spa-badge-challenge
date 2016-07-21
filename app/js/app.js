$(function() {
  var teachers;
  loadTeachersIndex();
});

var loadTeachersIndex = function() {
  $.get({
    url: 'http://sample-badges-api.herokuapp.com/teachers'
  })
  .done(function(response) {
    teachers = response;
    renderTemplate('#teachers-index-template', {teachers: teachers});
    loadListeners();
  })
  .fail(function(error) {
    console.log(error);
  });
}

var loadTeachersShow = function (teacher) {
  $.get({
    url: 'http://sample-badges-api.herokuapp.com/teachers/' + teacher.id
  })
  .done(function(response) {
    renderTemplate('#teachers-show-template', {teacher: teacher, badges: response});
    loadListeners();
  })
  .fail(function(error) {
    console.log(error);
  });
};

var renderTemplate = function(template, context) {
  var theTemplateScript = $(template).html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var theCompiledHtml = theTemplate(context);
  $('main').html(theCompiledHtml);
};

var createBadge = function(data) {
  $.post({
    url: 'http://sample-badges-api.herokuapp.com/badges',
    data: data
  })
  .done(function(response) {


cw    console.log(response);


  })
  .fail(function(error) {
    console.log(error);
  });
}

var loadListeners = function() {
  teachersShowListener();
  // teachersIndexListener();
  createBadgeListener();
};

var teachersShowListener = function() {
  $('a[href="#show"]').on("click", function(event) {
    event.preventDefault();
    name = $(this).html();
    window.location.hash = name.toLowerCase();
    loadTeachersShow(teachers.find(function(t){return t.name == name}));
  });
};

// var teachersIndexListener = function() {

// };

var createBadgeListener = function() {
  $('div.add-badge form').on('submit', function(event) {
    event.preventDefault();
    data = $(this).serialize();
    createBadge(data);
  });
};
