const router = require("express").router();

app.use(express.json());

//create
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../assets/notes.html"));
});


module.exports = router;


/*
- assignment recipe list

-------
connect index and notes with eventlistener
show notes page

individual notes need ids because we need to pass in something for a name


*/