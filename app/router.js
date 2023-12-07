import EmberRouter from '@ember/routing/router';
import config from 'snazzwaggler/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('projects');
  this.route('contact', { path: '/lets-talk' });
  this.route('404');
});
