import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProjectComponent extends Component {
  @tracked isPreview = false;

  // Todo: if user hovers over image, show reel if there is one

  @action toggleView() {
    this.isPreview = !this.isPreview;
  }
}
