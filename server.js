import express from "express"
import nunjucks from "nunjucks"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static(path.join(__dirname, "public")))

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
const PORT = 3000


app.get("/", (req, res) => {
    res.render('index.html')
})
app.get("/sidebar", (req, res) => {
    res.render('sidebar.html')
})
app.get("/header", (req, res) => {
    res.render('header.html')
})
app.get("/dashboard", (req, res) => {
    const hxRequest = req.headers['hx-request']
    if (hxRequest) {
        res.render('dashboard.html')
    } else {
        res.render('index.html', { path: req.path })
    }
})
app.get("/profile", (req, res) => {
    const hxRequest = req.headers['hx-request']
    if (hxRequest) {
        res.render('profile.html')
    } else {
        res.render('index.html', { path: req.path })

    }
})

app.get("/team", (req, res) => {
    const hxRequest = req.headers['hx-request']
    if (hxRequest) {
        res.render('team.html')
    } else {
        res.render('index.html', { path: req.path })

    }
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))