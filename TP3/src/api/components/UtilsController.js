let users = require('./User/UserData');
const User = require('./User/models/UserModel')
const { use } = require('./UtilsRoutes');

// //PING
// exports.ping = (req, res) => {
//     res.status(200).json({ result: "pong"});
// };

exports.readAll = (req, res) => {
   User.find()
    .exec()
    .then(result => {
        return res.status(201).json(result);
    })
    .catch(err => {
        return res.status(400).json(err);
    });



};


//Creat one

exports.createOne = (req, res) => {
    const user = new User (req.body);
    user
        .save()
        .then(result => {
            return res.status(201).json(result);
        })
        .catch(err => {
            return res.status(400).json(err);
        });
    
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

