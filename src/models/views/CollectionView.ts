import { Collection } from "../Collection";
import { User, UserProps } from "../User";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public colloection: Collection<T, K>) {

  }

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template')
    for (let model of this.colloection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);

    }
    this.parent.append(templateElement.content);

  }
}