var express = require('express');
var router = express.Router();

/* GET members listing. */
router.get('/', function(req, res, next) {
    res.send('GET members');
});

/* POST members listing. */
router.post('/', function(req, res, next) {
    res.send('post members');
});

module.exports = router;