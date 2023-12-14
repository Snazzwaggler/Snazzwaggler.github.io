import Route from '@ember/routing/route';
import { projects } from '../constants/projects';

export default class ProjectsRoute extends Route {
  model() {
    return projects;
  }
}
