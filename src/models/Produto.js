const mongoose = require('mongoose');
const EstoqueSchema = new mongoose.Schema({
    produto  : String,
    thumb : String,
    desc : String,
    quantidade : Number,
    valor : Number,
    tipo : String
});
module.exports = mongoose.model('Estoque', EstoqueSchema);
