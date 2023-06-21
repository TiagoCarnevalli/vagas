var data =  require("./fakeData");

module.exports = function(req, res) {
  
    var name =  req.query.name;

    for(i = 0; i < data.length; i++) {
        if (data[i].name == name) {
            try {
                data.splice(i, 1);
                
                res.send(data);
                res.send("success");
            } catch (e) {
                res.send(e);
            }
        }
    };
};