import mongoose from 'mongoose';

// for typescript
interface ICodeSchema {
  fullCode: {
    html: string;
    css: string;
    javascripts: string;
  };
}

// fro mongoose
const CodeSchema = new mongoose.Schema({
  fullCode: {
    html: String,
    css: String,
    js: String,
  },
});

export const Code = mongoose.model('Code', CodeSchema);
