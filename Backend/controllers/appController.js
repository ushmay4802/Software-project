exports.getHome = (req, res, next) => {
    try {
        res.send("Home page");
    } catch (error) {
        console.log("An error occured");
    }
}