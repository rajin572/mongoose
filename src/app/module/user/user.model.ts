import { Schema, model } from "mongoose"
import { IUser } from "./user.interface"

const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true
    },
    contactNum: {
      type: String,
      required: true
    }

  })

  const User = model<IUser>('User', userSchema)

export default User