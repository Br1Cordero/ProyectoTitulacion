const email = require('nodemailer');
const User = require('../models/User');
const passport = require('passport');
const userCtrl = {};

userCtrl.renderSignUpForm = (req, res) => {
    res.render('auth/signup', { title: 'signup', layout: 'main_auth' })
}

userCtrl.signup = async (req, res) => {
    try {
        const errors = [];
        const { name, email, password, verifyPassword } = req.body;
        console.log(req.body)
        if (password != verifyPassword) {
            errors.push({ text: 'No coinciden las contraseñas' });

        }
        if (password.length < 5) {
            errors.push({ text: 'La contraseña debe de ser mayor a 5 dígitos' });
        } if (errors.length > 0) {
            res.render('auth/signup', { title: 'signup', layout: 'main_auth', errors, name, email, password, verifyPassword })
        } else {

            const emailUser = await User.findOne({ email: email });
            if (emailUser) {
                req.flash('error_msg', 'el correo ya esta registrado');
                res.redirect('/auth/signup')
            } else {
                const newUser = new User({ name, email, password });
                newUser.password = await newUser.encryptPass(password)
                await newUser.save();
                req.flash('message', 'Registro Exitoso')
                res.redirect('/auth/singing')
            }
        }
    } catch (err) {
        console.log(err)
    }
}

userCtrl.renderSignInForm = (req, res) => {
    res.render('auth/signing', { title: 'signing', layout: 'main_auth' })
}

userCtrl.signIn = passport.authenticate('local', {
    failureRedirect: '/auth/singing',
    successRedirect: '/',
    failureFlash: true
});

userCtrl.logout = async (req, res, next) => {
    await req.logout((err) => {
        if (err) return next(err);
        req.flash("message", "Vuelve pronto");
        res.redirect("/auth/singing");
    });
};
module.exports = userCtrl