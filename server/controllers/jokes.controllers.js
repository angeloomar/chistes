const Jokes = require("../models/jokes.model");


module.exports.createJokes = async (req, res) => {
    console.log(req.body.jokes);
    try {
        const newJokes = await Jokes.create(req.body.jokes);
        res.json({
            message: 'Se crea de manera exitosa la  broma',
            newJokes,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.updateJokes = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        const updatedJokes = await Jokes.findByIdAndUpdate(id, body.jokes, { new: true });
        res.json({
            message: 'Se actualiza de manera exitosa la información del estudiante',
            updatedJokes,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.removeJokes = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedJokes = await Jokes.deleteOne({ _id: id });
        res.json({
            message: 'Actualización realizada',
            deletedJokes,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}
