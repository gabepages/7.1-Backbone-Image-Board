var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var ImagesCollection = require('./models/images');
var feed = require('./components/listing.jsx');
var AddForm = require('./components/form.jsx');
var ImageList = feed.ImageList;
$('.add-btn').on('click', function(){
  $('#add-form').toggle('medium', function(){
    $('#add-form').removeClass('hidden');
  });
});


var images = new ImagesCollection();

console.log(images);
images.fetch().done(function (){
  ReactDOM.render(<ImageList collection={images} /> , document.getElementById('listing'));
});
ReactDOM.render(<AddForm collection={images} />, document.getElementById('form'))
