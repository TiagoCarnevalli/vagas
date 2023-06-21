

module.exports = function(req, res){
    
    var name = req.query.name;
    var read = req.query.read;
    
    read += 1;
    res.send("Usuário " +  name  + " foi lido " + read + read == 1 ? " vez." : " vezes.");
};