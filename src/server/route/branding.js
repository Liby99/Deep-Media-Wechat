var mysql = require("../module/mysql.js");
var User = require("../api/user.js");
var Branding = require("../api/branding.js");

module.exports = function (req, res, callback) {
    Branding.getAllCases(function (result) {
        callback({
            "events": result
        });
    });
}