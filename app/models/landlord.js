import DS from 'ember-data';

export default DS.Model.extend({
  	name: DS.attr('string'),
	  address: DS.attr('string'),
	  telephone: DS.attr('string'),
    rentals: DS.hasMany('rental', {async: true})
});
