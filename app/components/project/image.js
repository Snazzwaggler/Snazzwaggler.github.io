import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class ProjectImageComponent extends Component {

    @tracked isPreview = true;

    // Todo: if user hovers over image, show reel if there is one

    @action toggleView() {
        this.isPreview = !this.isPreview;
    }

}
