import mongoose from 'mongoose';


const testmessangerSchema = mongoose.Schema({
    email: String,
    password: String,
},{
    writeConcern: {
      j: true,
      wtimeout: 1000
    }
  });

export default mongoose.model('messangertests', testmessangerSchema);