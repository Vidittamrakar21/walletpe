import express from "express";

//@ts-ignore
import {createacc,createsession, verifytoken, loginacc} from '../controller/auth'

const router = express.Router();

router.route('/signup').post(createacc)
router.route('/login').post(loginacc)
router.route('/session').post(createsession)
router.route('/verify').post(verifytoken)

module.exports = router;