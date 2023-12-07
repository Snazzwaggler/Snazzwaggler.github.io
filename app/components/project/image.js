import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProjectImageComponent extends Component {

    // tracked tells ember to re-render any templates depending on this value when it changes
    @tracked isPreview = true;

    // action tells ember that we intend to use this method from template
    @action toggleView() {
        this.isPreview = !this.isPreview;
    }

}
