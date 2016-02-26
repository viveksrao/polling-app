import Ember from 'ember';

export function formatPercentage(number) {
  return `${number * 100}%`;
}

export default Ember.Helper.helper(formatPercentage);
