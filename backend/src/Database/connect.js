import mongoose from "mongoose";

const Database = () => {
  mongoose.set({ strictQuery: true });
  // mongoose.connection.useDB("Chatter");
  mongoose
    .connect(process.env.DB_URL, { dbName: "Chatter" })
    .then((data) => {
      console.log(`Database connected with server => ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Database Connection error =>", error);
      process.exit();
    });
};

const closeDBConnection = async () => {
  const closedConnection = await mongoose.disconnect();
  console.log("DB connection closed : ", closedConnection);
};

export { Database, closeDBConnection };
