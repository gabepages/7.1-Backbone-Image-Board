var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


var Images = Backbone.Model.extend({

});

var ImagesCollection = Backbone.Collection.extend({
  model: Images,
  // initialize: function (){
  //   this.bind('add', this.save, this);
  // },
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/gabesfinalimages',
 //  save: function(){
 //   $.post(this.url, this.toJSON());
 // }
});

module.exports= ImagesCollection;
