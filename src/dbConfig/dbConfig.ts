import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.log("Somerthing wrong happened" + error);
      process.exit();
    });
  } catch (error) {
    console.log("Somerthing wrong happened" + error);
  }
}
