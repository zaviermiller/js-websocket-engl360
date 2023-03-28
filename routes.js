const fs = require('fs');
const path = require('path');

function createRoutes(app) {
  app.get('/likes', (request, response) => {
    const numLikes = parseInt(fs.readFileSync('db.txt', 'utf8'));
    response.json({ numLikes });
  });

  app.put('/like', (req, res) => {
    // read number of likes from db.txt
    const numLikes = parseInt(fs.readFileSync('db.txt', 'utf8'));

    // add 1 to number of likes and write to db.txt
    fs.writeFileSync('db.txt', String(numLikes + 1));

    // send back the new number of likes
    res.json({ numLikes: numLikes + 1 });
  });

  // render page at root
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname + '/index.html'))
  );
}

module.exports = createRoutes;
