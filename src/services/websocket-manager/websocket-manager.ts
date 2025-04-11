// websocket-manager.ts
export default class WebSocketManager {
  private ws: WebSocket;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.initialize();
  }

  private initialize() {
    this.ws.addEventListener('open', async () => {
      console.log('Соединение установлено!');
      await this.handleOpen();
    });

    this.ws.addEventListener('message', (e) => {
      console.log(e.data);
    });
  }

  public send(data: string) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(data);
    } else {
      console.error('WebSocket не открыт. Попробуйте отправить данные позже.');
    }
  }

  public close() {
    this.ws.close();
  }

  public handleOpen() {
    const data = {
      id: '2',
      type: 'USER_LOGIN',
      payload: {
        user: {
          login: 'Dima_test',
          password: '123',
        },
      },
    };

    this.send(JSON.stringify(data)); // Отправка данных сразу после подключения
  }
}
