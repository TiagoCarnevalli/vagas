var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    var id =  req.query.id;

    const reg = data.find(d => d.id == id);
    reg.name = req.body.name;
    reg.job = req.body.job;

    data.splice(reg.id - 1, 1, reg);

    res.send(reg);

};