var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

  const { body } = req
  if ( body.token !== process.env.VERIFICATION_TOKEN ) {
    return res.redirect('/');
  }

  const challenge = body.challenge
  res.status(200);
  res.set('Content-Type', 'application/json');
  res.json({challenge});
});

module.exports = router;
