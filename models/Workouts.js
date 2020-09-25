const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
    type: {
      type: String,
      trim: true,
      required: "Must specify exercise type"
    },
    name: {
      type: String,
      trim: true,
      required: "Must specify exercise name"
    },
    duration: {
      type: Number,
      required: "Must specify length of exercise"
    },
    weight: {
      type: Number,

    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    },
  }
  ]
}
  , {
    toJSON: {
      virtuals: true
    }
  }
);
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, excercise) => {
    return total + excercise.duration;
  }, 0)
})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
