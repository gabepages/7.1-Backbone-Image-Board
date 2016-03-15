var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var models = require('./../models/images.js');


var ListingComponent = React.createClass({
   mixins: [Backbone.React.Component.mixin],
   render: function() {
     return(

         <div className="col-sm-12 col-md-10 col-md-offset-1">
           <div className="thumbnail">
             <img src={this.props.model.get('url')} />
             <div className="caption">
               <p>{this.props.model.get('caption')}</p>
             </div>
           </div>
         </div>

     )
  }
});

var ImageList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){

    var eachItem = this.props.collection.map(function(model){
     if (model.get('undefined') != ""){
       return (
         <ListingComponent
           model={model}
           key={model.get('_id')}
          />
       )
     }
    });
   return(
     <div className="row">
        {eachItem}
    </div>
   )
  }
});
module.exports = {
  'ImageList': ImageList,
  'ListingComponent': ListingComponent
};
