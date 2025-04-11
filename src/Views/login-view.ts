import './login-view.scss';
import ElementCreator from '../templates/element-creator';

export default class LoginView {
  public container: ElementCreator;
  public inputName: ElementCreator;

  constructor() {
    this.container = new ElementCreator({ className: ['container'] });
    this.inputName = new ElementCreator({ tag: 'input', className: ['input-name'] });
    this.setLoginView();
  }

  public setLoginView() {
    this.container.getNode().append(this.inputName.getNode());
  }

  public render(container: HTMLElement) {
    container.append(this.container.getNode());
  }
}
