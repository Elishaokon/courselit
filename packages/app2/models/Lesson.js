const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { text, video, audio, pdf, quiz } = require("../config/constants");

const LessonSchema = new mongoose.Schema({
  domain: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true, enum: [text, video, audio, pdf, quiz] },
  content: String,
  mediaId: mongoose.Schema.Types.ObjectId,
  downloadable: { type: Boolean, default: false },
  creatorId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  requiresEnrollment: { type: Boolean, default: false },
  groupId: { type: mongoose.Schema.Types.ObjectId, required: true },
  // order of the lesson in the group it is associated to
  groupRank: { type: Number, required: true },
});

if (!mongoose.models.Lesson) {
  LessonSchema.plugin(AutoIncrement, { inc_field: "lessonId" });
}

module.exports =
  mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);
