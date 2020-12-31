let users = require('./User/UserData');
const { use } = require('./UtilsRoutes');

// //PING
// exports.ping = (req, res) => {
//     res.status(200).json({ result: "pong"});
// };

exports.readAll = (req, res) => {
    res.status(200).json(users);


};


//Creat one

exports.createOne = (req, res) => {
    const user = {
        id: users[users.length - 1].id + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        creationDate: new Date,
        role: req.body.role,

    };

    users.push(user);
    res.status(201).json(user);
}

//Delete one

exports.deleteOne = (req, res) => {

    const user = users.find(user => user.id == req.params.id);

    if (!user) {
        res.status(404).json(`id ${req.params.id} not found`)
    }

    else {
        index = users.indexOf(user);
        users.splice(index, 1);
        res.status(200).json(users);
    }



}

exports.updateUser = (req, res) => {

    const user = users.find(user => user.id == req.params.id);
    if (user != undefined) {
        user = {
            firstName: (req.body.firstName != undefined) ? req.body.firstName : user.firstName,
            lastName: (req.body.lastName != undefined) ? req.body.lastName : user.lastName,
            email: (req.body.email != undefined) ? req.body.email : user.email,
            password: (req.body.password != undefined) ? req.body.password : user.password,
            phone: (req.body.phone != undefined) ? req.body.phone : user.phone,
            role: (req.body.role != undefined) ? req.body.role : user.role,
        }
        res.status(201).json(user);
    } else {
        res.status(404).json({ result: `id ${req.params.id} : Not found` });
    }
}


//Read one by Id
exports.readOneById = (req, res) => {

    const user = users.find(user => user.id == req.params.id);

    if (!user) {
        res.status(404).json(`id ${req.params.id} not found`)
    }


    res.status(200).json(user);

}

