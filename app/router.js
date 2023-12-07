import EmberRouter from '@ember/routing/router';
import config from 'snazzwaggler/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('a-list');
  // this.route('a-list-two');
  this.route('about');
  this.route('contact', { path: '/you_talkin_to_me' });
  this.route('projects');
});
