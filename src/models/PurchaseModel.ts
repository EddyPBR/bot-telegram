import { Schema, Document, model } from "mongoose";

interface IPurchase extends Document {
  _id: string;
  client_name: string;
}

const PurchaseSchema = new Schema({
  client_name: {
    type: String,
    required: true,
  },
});

export default model<IPurchase>("Purchase", PurchaseSchema);
