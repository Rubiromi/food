//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require moment
//= require fullcalendar
//= require_self


var startTheParty = function() {
  console.log('it works!');
  window.setTimeout(function() {
    $('#hello').modal('show');
  }, 1500);
};

 var loadEvents = function() {
   $.getJSON('/events', function(events) {
     $('#calendar').fullCalendar({
       events: events,
       header: {
         left: 'prev',
         center: 'title',
         right: 'next'
       },
       dayClick: function(date, jsEvent, view) {
         // console.log(date.format('MMM Do YY'));
         var today = date.format('MMM Do YY');
         $('#hello .modal-dialog .modal-content .modal-body p').replaceWith('<p>Today is ' +today+ ' </p>');
         $('#hello').modal('show');
       }
     });
   });
 };



  // startTheParty();

  // $.getJSON('/events', function(events) {
  //   $('#calendar').fullCalendar({
  //     events: events,
  //     header: {
  //       left: 'prev',
  //       center: 'title',
  //       right: 'next'
  //     },
  //     dayClick: function(date, jsEvent, view) {
  //       // console.log(date.format('MMM Do YY'));
  //       var today = date.format('MMM Do YY');
  //       $('#hello .modal-dialog .modal-content .modal-body p').replaceWith('<p>Today is ' +today+ ' </p>');
  //       $('#hello').modal('show');
  //     }
  //   });
  // });

$(function() {
  loadEvents();

  // $.getJSON('/places', function(data) {
  //   console.log(data);
  // });
  //
  // $.getJSON('/restaurants', function(restaurants) {
  //   $(restaurants).each(function() {
  //     $('#restaurants').append('<p>' + restaurant.name + '</p>');
  //   });
  // });

  // $.getJSON('/events', function(events) {
  //   console.log(events);
  // });

    var $form = $('form#new_event');

    $('input.btn', $form).click(function() {
      $.post($form.attr('action'), $form.serialize(), function(data) {
        console.log(data);
        console.log('Event created');
        $('#create-event').modal('hide');
        loadEvents();
      });
      return false;
    });

});
