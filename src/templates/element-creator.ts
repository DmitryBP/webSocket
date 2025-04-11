export default class ElementCreator {
  public tag: string;
  public className?: string[];
  public text?: string;
  public node: HTMLElement;

  constructor({tag = 'div', className = [''], text = ''}) {
    this.tag = tag;
    this.className = className;
    this.text = text;

    const node = document.createElement(tag);
    node.classList.add(...this.className)
    node.innerText = text;

    this.node = node;
  }

  public getNode(): HTMLElement {
    return this.node;
  }
}