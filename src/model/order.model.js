import mongoose from 'mongoose';

const loadSchema = new mongoose.Schema({
    id: { type: String, required: true },
    weight: { type: Number, required: true },
}, { _id: false })

const truckSchema = new mongoose.Schema({
    truckID: { type: String, required: true },
    load: { type: [loadSchema], required: true }
}, { _id: false })
const orderSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    trucks: { type: [truckSchema], required: true }
}, { timestamps: true });


export default mongoose.model('Order', orderSchema);

