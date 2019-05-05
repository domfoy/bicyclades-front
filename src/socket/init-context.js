import parseMessage from './in';
import {handleOpen, sendMessage, sendToServerCreator} from './out';

const url = 'ws://localhost:9002/ws';

class Bot {
  constructor({name}) {
    this.name = name;
    this.state = {
      game: {
        player: {
          name
        }
      }
    };
  }

  connect() {
    const bot = this;

    return new Promise((resolve) => {
      const socket = new WebSocket(url);

      socket.binaryType = 'arraybuffer';

      const sendToServer = sendToServerCreator(socket);

      socket.onopen = () => {
        console.log(bot.name, 'connected');
        handleOpen(bot.state, sendToServer);

        resolve();
      };

      let sent = false;
      socket.onmessage = (evt) => {
        const action = parseMessage(bot.state, evt.data);

        if (!sent) {
          sendMessage(bot.state, sendToServer, {type: 'JOIN_GAME'});
          sent = true;
        }

        if (!action) {
          return;
        }
        console.log(bot.name, 'received from server', JSON.stringify(action, null, 2));
      };
    });
  }
}

export default async function initSocketContext() {
  const bot1 = new Bot({name: 'bot1'});
  const bot2 = new Bot({name: 'bot2'});

  await bot1.connect();
  await bot2.connect();
}
