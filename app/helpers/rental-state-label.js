import Ember from 'ember';

export function rentalStateLabel(params/*, hash*/) {

  var escaped = Ember.Handlebars.Utils.escapeExpression(params);
  var label_style = 'default';
  switch(escaped){
    case 'Let':
      label_style = 'danger';
      break;
    case 'To let':
      label_style = 'success';
      break;
  }
  return new Ember.Handlebars.SafeString('<span class="pull-right label label-' + label_style + '">' + escaped + '</span>');
}

export default Ember.Helper.helper(rentalStateLabel);
