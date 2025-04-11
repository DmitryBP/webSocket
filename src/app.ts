import WebSocketManager from './services/websocket-manager/websocket-manager';
import ElementCreator from './templates/element-creator';
import LoginView from './Views/login-view';

export default class App {
  public loginView: LoginView;
  private wsManager: WebSocketManager;

  constructor() {
    this.loginView = new LoginView();
    this.wsManager = new WebSocketManager('ws://localhost:4000');
  }

  init() {
    const main = new ElementCreator({ tag: 'main', className: ['main'] });
    document.body.append(main.getNode());
    this.loginView.render(main.getNode());
  }
}
