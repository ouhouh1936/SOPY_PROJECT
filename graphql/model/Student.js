import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    lecture: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Lecture`,
      },
    ],
  },
  { versionKey: false }
);

export default mongoose.model(`Studemt`, Student, `Student`);
