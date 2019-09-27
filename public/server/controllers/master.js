var mongoose = require('mongoose');
var user = mongoose.model('User');
var project = mongoose.model('Project');

module.exports = {
    splash: (req, res)=>{
        console.log("hit splash in master.js");
        if(req.session.userId != undefined){
            user.find({_id: req.session.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        } else {
            res.json(err);
        }
        project.find({}, function(err, projects){
            if(err){
                res.json(err);
            } else {
                res.json(projects);
            }
        })
    },

    home: (req, res)=>{
        console.log("hit home in master.js");
        project.find({}, function(err, projects){
            if(err){
                res.json(err)
            } else {
                res.json(projects);
            }
        });
        if(req.session.userId != undefined){
            user.findOne({_id: req.session.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        }
    },

    michael: function(req, res){
        if(req.session.userId != undefined){
            user.findOne({_id: req.session.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        }
        projects.find({}, function(err, projects){
            if(err){
                res.json(err);
            } else {
                res.json(projects);
            }
        }) 
    },

    projects: function(req, res){
        if(req.session.userId != undefined){
            user.findOne({_id: req.session.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        }
        projects.find({}, function(err, projects){
            if(err){
                res.json(err);
            } else {
                res.json(projects);
            }
        }) 
    },

    view: function(req, res){
        if(req.session.userId != undefined){
            user.findOne({_id: req.session.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        }
        projects.findOne({_id: req.params.id}, function(err, projects){
            if(err){
                res.json(err);
            } else {
                res.json(projects);
            }
        }) 
    }
}