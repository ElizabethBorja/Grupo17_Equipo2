import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const notaSchema = new Schema({
    Nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    Especie: String,
    Localidad: String,
    Fecha: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

// Convertir a modelo
const Nota = mongoose.model('Nota', notaSchema);
export default Nota;