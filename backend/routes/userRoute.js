const {prisma} =  require( '../utils/db');
const express = require('express');
const router = express.Router();

router.get('/:fullName', (req, res)=>{
    //http:localhost:5000/api/user/${fullName}
    const { fullName } = req.params;
    prisma.employee.findUnique({
        where: { fullName },
        include: { tasks: true }
    })
    .then(employee => {
        if (employee) {
            const doneTasks = employee.tasks.filter(task => task.status === 'done');
            res.json(doneTasks);
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ error: 'Internal server error' });
    });

});

module.exports = router;