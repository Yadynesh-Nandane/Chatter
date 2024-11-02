import mongoose from "mongoose";

const database = () => {
  mongoose.set({ strictQuery: true });
  // mongoose.connection.useDB("Chatter");
  mongoose
    .connect(process.env.DB_URL,{dbName: "Chatter"})
    .then((data) => {
      console.log(`Database connected with server => ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Database Connection error =>", error);
      process.exit();
    });
};

export default database;