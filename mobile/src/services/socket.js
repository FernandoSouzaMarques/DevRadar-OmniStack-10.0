import socketio from 'socket.io-client';
import { baseURL } from '../utils/config';

const socket = socketio(baseURL, {
  autoConnect: false,
});

function subscribleToNewDev(subscribleFunction) {
  socket.on('new-dev', subscribleFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  }
  socket.connect();
}

function disconnect() {
  if (socket.connected) socket.disconnect();
}

export {
  connect,
  disconnect,
  subscribleToNewDev
}