const WebSocket = require('ws');
const fs = require('fs');

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    //connection is up, let's add a simple simple event
    ws.on('message', (_message) => {
      // read number of likes from db.txt
      const numLikes = parseInt(fs.readFileSync('db.txt', 'utf8'));

      // add 1 to number of likes and write to db.txt
      fs.writeFileSync('db.txt', String(numLikes + 1));

      // send back the new number of likes to all clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(numLikes + 1);
        }
      });
    });

    // send the like count from db.txt
    const numLikes = parseInt(fs.readFileSync('db.txt', 'utf8'));
    ws.send(numLikes);
  });
};
