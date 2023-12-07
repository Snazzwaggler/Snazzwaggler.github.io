import Route from '@ember/routing/route';

// Models represent persistent state

export default class AListRoute extends Route {
  // In model method, return data
  // you want to make available to template
  model() {
    return {
      list1: ['words', 'other words', 'w0rds?'],
      list2: ['words2', 'other words2', 'w0rds?2'],
    };
  }
}
