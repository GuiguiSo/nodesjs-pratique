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
        id: users[users.length - 1].id +1,
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

//Read one by Id
exports.readOneById = (req, res) => {

    const user = users.find(user => user.id == req.params.id);

    if(!user){
        res.status(404).json(`id ${req.params.id} not found`)
    }


    res.status(200).json(user);

}

