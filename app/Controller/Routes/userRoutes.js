// This is for user routing which requires functions created in controller/user.js
var User = require('../user');

// Specifying API Server Endpoints, each corresponds to a directory path
// and a controller CRUD function & exporting this router
module.exports = function(router){
 router.post('/users', User.create),
 router.get('/users', User.get),
 router.get('/users/:id', User.getbyId),
 router.put('/users/:id', User.update),
 router.delete('/users/:id', User.removeById)
};
