import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('landlords', {}, function () {
    this.route('index', {path: ''});
    this.route('show', {path: '/:landlord_id'});
  });
  this.route('rentals', function () {
    this.route('index', {path: ''});
    this.route('show', {path: '/:rental_id'});
  });
});

export default Router;
