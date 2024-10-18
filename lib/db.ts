import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
    //readyState: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnected
    const connState = mongoose.connection.readyState;

    if (connState === 1) {
        console.log("Already connected to MongoDB!");
        return;
    }

    if (connState === 2) {
        console.log("Connecting to MongoDB...");
        return;
    }

    //Connect to MongoDB
    try {
        console.log("Estabilishing connection to MongoDB...");
        await mongoose.connect(MONGO_URI!, {
            dbName: "next-api",
            bufferCommands: true,
        });
        console.log("Connected to MongoDB!");
    } catch (err: any) {
        console.log("Error connecting to MongoDB (" + err.message + ")");
        throw new Error("Error connecting to MongoDB (" + err.message + ")");
    }
}

export default connect;