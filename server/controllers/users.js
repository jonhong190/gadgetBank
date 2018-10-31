const {User, Order, Product, Category, Op}  = require("../config/sequelize.js");

module.exports ={
    allUsers : (req,res)=>{
        User.findAll({})
            .then(users =>{
                if(users.length == 0){
                    res.json({errors:"No users here"})
                } else {
                    res.json(users)
                }
            })
    },
    createUser : (req,res)=>{
        //querry by username
        User.findAll({where:{username:req.body.username}}).then(user=>{
            //if user does not exist already
            if(user.length == 0){
                //validate first name
                if(req.body.first_name.length < 4){
                    res.json({errors:"First Name must be at least 3 characters long"});
                }
                //validate last name
                if(req.body.last_name.length < 2){
                    res.json({errors:"Last Name must be at least 2 characters long"});
                }
                //validate password
                if(req.body.password.length < 8){
                    res.json({errors:"Password must be at least 8 characters long"});
                }
                
                User.create(req.body).then(user=>{
                    //save username to session
                    req.session.username = req.body.username;
                    res.json(user);
                })
            } else {
                res.json({errors:"Username already taken"});
            }
        })
    },
    loginUser : (req,res)=>{
        //querry by email
        User.findAll({where:{email:req.body.email}}).then(user=>{
            //check if user exists
            if(user.length == 0){
                res.json({errors:"Account does not exist"});
            }
            //password match check
            if(req.body.password != user[0].password){
                res.json({errors:"Incorrect Password"});
            }
            else {
                //put user in session
                req.session.username = user.username;
                res.json(user);
            }
        })
    },
    getOneUser :(req,res)=>{
        User.findAll({where:{username:req.params.username}}).then(user=>{
            if(user.length == 0){
                res.json({errors:"User does not exist"})
            } else {
                res.json(user)
            }
        })
    }
}
