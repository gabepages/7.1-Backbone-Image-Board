var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./../models/images.js');



var AddForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  clear: function(e){
    e.preventDefault();
    $('#add-form').toggle('medium', function(){
      $('#add-form').addClass('hidden');
    });
  },
  submit: function(e){
    e.preventDefault();
    var imageData = {url: $('#url').val(), caption: $('#caption').val()};
    this.props.collection.create(imageData);
    $('#url').val('');
    $('#caption').val('');
    $('#add-form').toggle('medium', function(){
      $('#add-form').addClass('hidden');
    });
  },
  render: function(){

    return(
      <form id='add-form' className='hidden'>
        <div id='form-content'>
          <div className="form-group">
            <label htmlFor="url">Image URL:</label>
            <input type="text" className="form-control" id="url" placeholder="https://example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="caption">Image Caption:</label>
            <input type="text" className="form-control" id="caption" placeholder="Cool caption" required />
          </div>
          <button type="button" className="btn btn-danger" id='cancel-btn' onClick={this.clear}>Cancel</button>
          <button type="submit" className="btn btn-success" id='add-image' onClick={this.submit}>Add Image</button>
        </div>
      </form>
    )
  }
});

module.exports = AddForm;
