import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://muzny:123@Bcas@cluster0.nsoja.mongodb.net/",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;

// mongodb+srv://anu:3COCz7DFuTuqharj@cluster0.lvf7aon.mongodb.net/?retryWrites=true&w=majority
