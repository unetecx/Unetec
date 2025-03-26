const express =  require('express');
const sesseion = require('express-session');
const passaport = require('passport');
const mongo = require ('mongoose');
const localStrategy = require('passport-local').Strategy;
const bctypt = ('bcrypt');


