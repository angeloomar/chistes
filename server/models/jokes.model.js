const { Schema, model } = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const jokesSchema = new Schema({
    broma: {
        type: String,
        required: [true, 'Debe ingresar un nombre al estudiante'],
        minlength: [2, 'No puede tener menos de 3 caracteres']
    }

}, { timestamps: true });

jokesSchema.plugin(uniqueValidator, { message: '{PATH} broma ya existe, favor intentar con una nueva' });

const Jokes = model('Jokes', jokesSchema);

module.exports = Jokes;