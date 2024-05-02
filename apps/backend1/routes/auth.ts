import express from "express";

//@ts-ignore
import {createacc,createsession, verifytoken, loginacc, finduser} from '../controller/auth'

const router = express.Router();

router.route('/signup').post(createacc)
router.route('/login').post(loginacc)
router.route('/session').post(createsession)
router.route('/verify').post(verifytoken)
router.route('/getuser').post(finduser)

module.exports = router;