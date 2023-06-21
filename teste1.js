var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    var name =  req.query.name;

    data.forEach(element => {
        element.name == name ?? res.send(element);
    });

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};