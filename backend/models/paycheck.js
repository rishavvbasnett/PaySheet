import mongoose, { Mongoose } from "mongoose";

const url = process.env.MONGODB_URI;
mongoose
  .connect(url, { family: 4 })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log(error.message));

/* Paycheck Scehma */
const paycheckSchema = new mongoose.Schema({
  weekStart: String,
  weekEnd: String,
  shifts: Object,
  tips: Object,
  notes: String,
  expected: Number,
  received: {
    type: Number,
    default: null,
  },
});

paycheckSchema.set("toJSON", {
  transform: (document, documentObject) => {
    documentObject.id = documentObject._id.toString();
    delete documentObject._id;
    delete documentObject.__v;
  },
});

/* Paycheck model */
const Paycheck = new mongoose.model("Paycheck", paycheckSchema);

export default Paycheck;
