const express = require('express');
const morgan = require('morgan');
const path = require('path');
const flash = require ('connect-flash')
const session = require('express-session')
const passport  = require('passport');

//const { addAbortSignal } = require('stream');

// handlebars
const exphbs = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const handlebars = require('handlebars')

const methodOverride = require('method-override');



//Initialization | Inicializamos el servidor 

const app = express();
require('./config/passport');
//  Settings  | Configuraciones

app.set('port', process.env.PORT || 300);
app.set('views', path.join(__dirname, 'views'));

const hbs = exphbs.create({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    handlebars: allowInsecurePrototypeAccess(handlebars),
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// Middleware | Funciones que piden el usuario
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(session({
    secret: 'secreto',
    resave : true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session())

app.use(flash())

// Global Variables | Variables Globales
app.use((req, res, next)=>{
    res.locals.message = req.flash('message');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
})

// Routers | Rutas
app.use(require("./routers/index.routes.js"));
app.use(require("./routers/notes.routes.js"));
app.use(require("./routers/plants.routes.js"));
app.use(require("./routers/scanner.routes.js"));
app.use(require("./routers/users.routes.js"))
// Static Files | Archivos Estáticos

app.use(express.static(path.join(__dirname, 'public')));


module.exports = app