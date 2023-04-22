import { User, UserProps } from '../User'
import { View } from './View';
export class UserForm extends View<User, UserProps> {

  eventMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAge,
      'click:.change-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;

      this.model.set({ name })
    }
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  }

  template(): string {
    return `
    <div>
    <input placeholder="${this.model.get('name')}"/>
    <button class="change-name">Change Name</button>
    <button class="set-age">SetRandomAge</button>
    <button class="save-model">Save</button>
    </div>
    `;
  }


}