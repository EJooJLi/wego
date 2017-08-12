// This is for user routing which requires functions created in controller/user.js
var UserControl = require('../user');

// Specifying API Server Endpoints, each corresponds to a directory path
// and a controller CRUD function & exporting this router
module.exports = function(router){
 router.post('/user', UserControl.create),
 router.get('/user/:id', UserControl.get),
 router.put('/user/:id', UserControl.update),
 router.delete('/user/:id', UserControl.delete)
};
