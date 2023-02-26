const StudentController = require('../controllers/student.controller');

module.exports = (app) => {
    app.post('/api/students/create', StudentController.createStudent);
    app.get('/api/students/:id', StudentController.findOneStudent);
    app.get('/api/students', StudentController.findAllStudents);
    app.put('/api/students/update/:id', StudentController.updateOneStudent);
    app.delete('/api/students/:id', StudentController.deleteOneStudent);
}