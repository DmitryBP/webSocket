// websocket-manager.ts
export default class WebSocketManager {
  private ws: WebSocket;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.initialize();
  }

  private initialize() {
    this.ws.addEventListener('open', () => {
      console.log('Соединение установлено!');
      this.send('data'); // Отправка данных сразу после подключения
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
}
