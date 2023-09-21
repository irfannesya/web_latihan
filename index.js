const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./routers/router");

const port = 3000;
app.use(morgan("dev"));

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(router)

app.listen(port, () => {
    console.log(`server berjalan di port ${port} `);
});
