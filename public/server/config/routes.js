var master = require('../controllers/master.js');
var projects = require('../controllers/projects.js');
var user = require('../controllers/users.js');

var path = require('path');
var bp = require("body-parser");

module.exports = (app) => {
    app.use(bp.json());
    // app.get('/api/', master.splash);
    // app.get('/api/home/', master.home);
    // app.get('/api/michael/', master.michael);
    app.get('/api/projects/', master.projects);
    app.get('/api/projects/:id/', master.view);
    
//User functions------------------------------------------------------------------
    // app.get('/api/palaver/', user.splash);
    app.get('/api/palaver/session', user.session);
    app.get('/api/palaver/dash/', user.dash);
    app.get('/api/palaver/user/settings/', user.settings);
    app.get('/api/palaver/user/:id/', user.view);
    app.get('/api/palaver/user/delete/:id/', user.sure);
    app.post('/api/palaver/login/', user.login);
    app.post('/api/palaver/register/', user.register);
    app.get('/api/logout/', user.logout);
    app.put('/api/palaver/user/settings/:id', user.update);
    app.get('/api/palaver/user/delete/:id/confirm', user.delete);
    app.get('/api/getuser/:id', user.get_user);

//Project functions------------------------------------------------------------------
    app.get('/api/palaver/projects/', projects.all)
    app.get('/api/palaver/projects/new/', projects.new);
    app.get('/api/palaver/projects/:id/', projects.view);
    app.post('/api/palaver/projects/create/', projects.create);
    app.get('/api/palaver/projects/edit/:id/', projects.edit);
    app.put('/api/palaver/projects/edit/:id/',projects.update);
    app.get('/api/palaver/projects/delete/:id/', projects.sure);
    app.get('/api/palaver/projects/delete/:id/confirm', projects.delete);
    app.all("*", (req, res) => res.sendFile(path.resolve('./dist/public/index.html')));

}