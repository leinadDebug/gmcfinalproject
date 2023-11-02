const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/dhlv2hnt4/image/upload/v1698836417/WhatsApp_Image_2023-10-25_at_11.14.35_AM_jecygv.jpg",
    },
  },
  { timestamps: true }
);

userSchema.methods.matchpassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

userSchema.pre('save', async function (next) { //Encrypt the password
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10); //Generate a bcrypt salt with a cost factor of 10 for secure password hashing.
  this.password = await bcrypt.hash(this.password, salt); //hashing password with salt
});

const User = mongoose.model("User", userSchema);

module.exports = User;
