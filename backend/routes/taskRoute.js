const {prisma} =  require( '../utils/db');
const express = require('express');
const router = express.Router();



router.post('/add', async (req, res)=>{
    //http:localhost:5000/api/task/add
    const {fullName, description, checkInTime, checkOutTime} = req.body;
    try {
        let employee = await prisma.employee.findUnique({
            where: {
                fullName: fullName
            }
        });

        if (!employee) {
            employee = await prisma.employee.create({
                data: {
                    fullName: fullName
                }
            });
        }

        const employeeId = employee.id;

        const task = await prisma.task.create({
            data: {
                description: description,
                checkInTime: checkInTime,
                checkOutTime: checkOutTime,
                employeeId: employeeId
            }
        });

        res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
});



router.get('/', async (req, res)=>{
    //http:localhost:5000/api/task
    try {
        const tasks = await prisma.task.findMany();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks', error });
    }
})

module.exports = router;