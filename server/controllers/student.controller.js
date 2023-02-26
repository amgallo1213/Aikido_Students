const Student = require('../models/student.model');

module.exports = {
    findAllStudents: (req, res) => {
        Student.find({})
            .then((allStudents) => {
                console.log(allStudents);
                res.json(allStudents)
            })
            .catch((err) => {
                console.log('Find All Students failed.');
                res.json(err)
            })
    },
    createStudent: (req, res) => {
        Student.create(req.body)
            .then((newStudent) => {
                console.log(newStudent);
                res.json(newStudent)
            })
            .catch((err) => {
                console.log('Create New Student failed.');
                res.status(400).json(err)
            })
    },
    findOneStudent: (req, res) => {
        Student.findOne({_id: req.params.id})
            .then((oneStudent) => {
                console.log(oneStudent);
                res.json(oneStudent)
            })
            .catch((err) => {
                console.log('Find One Student failed');
                res.json(err)
            })
    },
    updateOneStudent: (req, res) => {
        Student.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedStudent => {
                console.log(updatedStudent);
                res.json(updatedStudent)
            })
            .catch((err) => {
                console.log('Update Student failed');
                res.status(400).json({message: "You have failed your belt test", error: err})
            })
    },
    deleteOneStudent: (req, res) => {
        Student.deleteOne({_id: req.params.id})
            .then((deletedStudent) => {
                console.log(deletedStudent);
                res.json(deletedStudent)
            })
            .catch((err) => {
                console.log('Delete One Student failed');
                res.json(err)
            })
    },
};