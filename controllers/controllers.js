const { validationResult } = require("express-validator");

module.exports = {
    getSignupPage: (req, res) => {
        res.render('signup');
    },
		
    signupUser: (req, res) => {
        const errors = validationResult(req); 
        if (errors.isEmpty() === false) { 
            res.status(500).json({errors: errors.array()});
            return;
        }
        console.log(req.body);
        res.send(req.body.email);
    }
}
