const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [2, "First name must be at least 2 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minlenght: [2, "Last name must be at least 2 characters"]
    },
    birthdate: {
        type: Date,
        required: true
    },
    startDate: {
        type: Date
    },
    beltColor: {
        type: Boolean,
        required: true,
    }
}, {timestamps: true});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;