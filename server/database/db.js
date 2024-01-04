import mongoose from 'mongoose';

const Connection = async (username = 'satyamev22169014', password = 'Satyamev7016' ) => {
    const URL = `mongodb+srv://${username}:${password}@documenteditor.7boehrn.mongodb.net/?retryWrites=true&w=majority`


try {
    mongoose.connect(URL);
    console.log('Database connected succesfully');
} catch (error) {
    console.log('Error while connecting with the database',error);
   }
}

export default Connection;