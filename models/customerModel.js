const customerSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  gender: {
    type: "string",
  },
  profilePic: {
    type: "string",
    default:
      "https://media.istockphoto.com/id/1130424979/vector/person-gray-photo-placeholder-man.jpg?s=612x612&w=0&k=20&c=Oc5r-nuA8FxnBBFSa6azLq5bWDyPZlKNu-8qFrUDy5I=",
  },
});

const Customer = new mongoose.model("customers", customerSchema);

export default Customer;
