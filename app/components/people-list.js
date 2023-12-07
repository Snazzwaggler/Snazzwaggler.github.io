import Component from '@glimmer/component';
import { action } from '@ember/object';

// a component is piece of template that can be referred to by name

// {{yield}} is replaced with content passed to component (within header <Jumbo>content here </Jumbo>)

export default class PeopleListComponent extends Component {
  @action
  showPerson(person) {
    alert(`The person's name is ${person}!`);
  }
}
