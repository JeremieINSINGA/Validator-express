const express = require('express');
const router = express.Router();
const userController=require(`../controllers/controllers`);
const expressValidator= require(`express-validator`)
const passwordValidator=require(`password-validator`)

router.get('/signup', userController.getSignupPage);
router.post(
    '/signup',
    expressValidator.body('email').isEmail(), 
    expressValidator.body('password').custom((value) => { 
        const schema = new passwordValidator();
        schema.is().min(4);
        return schema.validate(value);
    }),
    userController.signupUser
);

router.get('/username/:username', userController.getSignupPage);
router.post(
    '/username',
    expressValidator.body('email').isEmail(), 
    expressValidator.body('password').custom((value) => { 
        const passwordValidationSchema = new passwordValidator();
        passwordValidationSchema.is().min(8);
        passwordValidationSchema.is().max(20);
        return passwordValidationSchema.validate(value);
    }),
    userController.signupUser
);

module.exports = router;