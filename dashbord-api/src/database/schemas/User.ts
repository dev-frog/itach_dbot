import mongoose, { Schema } from "mongoose";

interface User {
    discordID: string;
    accessToken: string;
    refreshToken: string;
    name: string;
}

const UserSchema = new Schema<User>({
    discordID: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    accessToken: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    refreshToken: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    }
});

export default mongoose.model("User", UserSchema);