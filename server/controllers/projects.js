var mongoose = require('mongoose');
var user = mongoose.model('User');
var project = mongoose.model('Project');

module.exports = {
    all: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            project.find({}, function(err, projects){
                if(err){
                    res.json(err);
                } else {
                    res.json(projects);
                }
            })
        }
    },

    new: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            res.json(req);
        }
    },

    view: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            project.findOne({_id: req.params.id}, function(err, projects){
                if(err){
                    res.json(err);
                } else {
                    res.json(projects)
                }
            })
        }
    },

    create: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            var myProject = new project(req.body);
            myProject.save(function(err, myProject){
                if(err){
                    res.json(err);
                } else {
                    res.json(req.body);
                }
            })
        }
    },

    edit: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            project.findOne({_id: req.params.id}, function(err, projects){
                if(err){
                    res.json(err);
                } else {
                    res.json(projects);
                }
            })
        }
    },

    update: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            project.findOne({_id: req.params.id}, function(req, projects){
                if(err){
                    res.json(err);
                } else {
                    projects.name = req.body.name;
                    projects.gitslug = req.body.gitslug;
                    projects.exturl = req.body.exturl;
                    projects.desc = req.body.desc;
                    projects.com = req.body.com;
                    projects.img = req.body.img;
                }
            })

        }
    },

    sure: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            project.findOne({_id: req.params.id}, function(err, projects){
                if(err){
                    res.json(err);
                } else {
                    res.json(projects);
                }
            })
        }
    },

    delete: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            project.remove({_id: req.params.id}, function(err){
                if(err){
                    console.log("Error somehow.", err);
                    res.json(err);
                } else {
                    console.log("deleted");
                    res.json({message: "Deleted"});
                }
            })
        }
    }
}