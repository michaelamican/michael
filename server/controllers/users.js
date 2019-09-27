var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var user = mongoose.model('User');

module.exports = {

    splash: (req, res)=>{
        user.find({}, function(err, users){
            if(err){
                res.json(err);
            } else {
                res.json(users);
            }
        })
    },

    dash: function(req, res){
        console.log("User.js dash called");
        if(req.session.userId != undefined){
            console.log("req session present");
            user.findOne({_id: req.session.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                    project.find({}, function(err, projects){
                        if(err){
                            res.json(err);
                        } else {
                            res.json(projects);
                        }
                    })
                }
            })
        } else {
            console.log("req session undefined")
            res.json({error: "You must be logged in to continue"});
        }
    },

    settings: function(req, res){
        if(req.session.userId != undefined){
            user.findOne({_id: req.session.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        } else {
            res.json({error: "You must be logged in to continue"});
        }
    },

    view: function(req, res){
        if(req.session.userId != undefined){
            user.findOne({_id: req.params.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        } else {
            res.json({error: "You must be logged in to continue"});
        }
    },

    sure: function(req, res){
        if(req.session.userId != undefined){
            user.findOne({_id: req.params.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        } else {
            res.json({error: "You must be logged in to continue"});
        }
    },

    login: function(req, res){
        console.log("hit user.js login")
        if(req.session.userId == undefined){
            console.log("req.session userid not present");
            user.findOne({email: req.body.email}, function(err, foundUser){
                console.log("email is");
                console.log(req.body.email);
                if(err){
                    res.json("Invalid Credentials");
                } else {
                   bcrypt.compare(req.body.password, foundUser.password, function(err, result){
                       if(!result){
                           res.json({error: "Invalid Credentials"});
                       } else {
                           req.session.userId = foundUser._id;
                           console.log("Found user Id is:");
                           console.log(foundUser._id);
                           console.log("req.session.userId is:")
                           console.log(req.session.userId);
                           res.json({message: "Logged in"});
                       }
                   })
                }
            })
        } else {
            console.log("already logged in");
            this.home();
        }
    },

    register: function(req, res){
        console.log("User.js register function called");
        bcrypt.hash(req.body.password, 8, function(err, hash){
            if(err){
                console.log("bcrypt hash err");
                console.log(err);
                res.json(err);
            } else {
                console.log(req.body.first_name);
                req.body.password = hash;
                var newUser = new user(req.body);
                console.log("newUser set to user req.body")
                console.log(newUser.first_name);
                newUser.save(function(err){
                    console.log("user.js register newUser.save")
                    if(err){
                        console.log("user register error");
                        console.log(err);
                        res.json(err);
                    } else {
                        console.log("user.js register newUser.save successful. newUser id is:")
                        console.log(newUser._id);
                        req.session.userId = newUser._id;
                        res.json(newUser);
                    }
                })
            }
        })
    },

    logout: function(req, res){
        if(req.session.userId != undefined){
            req.session.userId = undefined;
            res.json("Logged out");
        } else {
            res.json("Already logged out");
        }
    },

    update: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            user.findOne({_id: req.params.id}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    users.first_name = req.body.first_name;
                    users.last_name = req.body.last_name;
                    users.email = req.body.email;
                    users.phone = req.body.phone;
                    users.password = req.body.password;
                }
            })
        }
    },

    delete: function(req, res){
        if(req.session.userId == undefined){
            res.json("You must be logged in to continue");
        } else {
            user.remove({_id: req.params.id}, function(err){
                if(err){
                    console.log("Errors, somehow.", err);
                    res.json(err);
                } else {
                    console.log("User deleted");
                    res.json({message: "Deleted"});
                }
            })
        }
    },

    get_user: function(req, res){
        if(req.session.userId == undefined){
            res.json({err: "Please login to continue"});
        } else {
            user.findOne({_id: req.session.userId}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        }
    }

}




//