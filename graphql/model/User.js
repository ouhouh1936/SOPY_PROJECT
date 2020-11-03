import mongooose from "mongoose";

const Schema = mongooose.Schema;

const User = new.Schema(
  {
    email: {
      type: String,
      reqired: true,
    },
    name: {
      type: String,
      reqired: true,
    },
    mobile: {
      type: String,
      reqired: true,
    },
    secretCode: {
      type: String,
      reqired: false,
    },
    createAt: {
      type: String,
      reqired: true,
    },
  },
  { versionKey: false }
);
export default mongoose.mobile(`User`, User, `User`);
