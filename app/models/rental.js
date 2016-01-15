import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  city: DS.attr('string'),
  bedrooms: DS.attr('string'),
  image: DS.attr('string'),
  dailyRent: DS.attr('string'),
  rentPaymentPeriod: DS.attr('string'),
  landlord: DS.belongsTo('landlord', {async: true}),
  propertyType: DS.belongsTo('property-type', {async: true}),
  rentalState: DS.belongsTo('rental-state', {async: true}),
});
