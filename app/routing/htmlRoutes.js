// DEPENDENCIES
const path = require('path');

// Export function that takes parametr app
module.exports = function (app) {
    // Rout for a servey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });

    // If no matching route is found default to home
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });
}