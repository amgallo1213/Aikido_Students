const mongoose = require('mongoose');

const dbName = "studentsDB";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => {console.log("You're connected to the student database!")})
    .catch((err) => {console.log("Oh no! Something went wrong connecting to the database!", err)});