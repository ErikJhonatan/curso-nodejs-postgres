const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('./../config/config');

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', {session: false}),
  (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role
      };
      const token = jwt.sign(payload, config.jwtSecret, {
        expiresIn: '15m'
      });
      res.status(200).json({
        user,
        token
      });
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router;
