const User= require('../../models/users')
const validatePassword= require('../../../utils/ValidateUser')
const registerUser =(req,res)=>{
  const name=req.body.name
  const email=req.body.email
  const password=req.body.password
  req.checkBody('name','Username is required').notEmpty()
  req.checkBody('email','email is required').notEmpty().isemail()
  req.checkBody('password','password is required').notEmpty()
  const errors= req.validationErrors()
  if(errors){
    res.json(errors[0].msg)
  }else if(validatePassword(password)!=="valid password"){
    res.send("password "+validatePassword(password))
  }else{
    const newUser = new User({
      name,email,password
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
      console.log(user);
      res.json({success:true})
		});
  }
  
}
module.exports=registerUser