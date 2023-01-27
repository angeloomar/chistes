const { updateJokes, createJokes, removeJokes } = require("../controllers/jokes.controllers");

module.exports = (app) => {
    app.post('/api/jokes', createJokes);
    app.put('/api/jokes/:id', updateJokes);
    app.delete('/api/jokes/:id', removeJokes);
};