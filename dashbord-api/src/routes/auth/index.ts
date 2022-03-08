import { Router } from "express";
import passport from "passport";
const router = Router();


router.get('/discord', passport.authenticate('discord'), (req,res) => {
    res.send('ok');
});

router.get('/discord/callback', passport.authenticate('discord'), (req,res) => {
    res.send({ msg: 'Success' });
});

export default router;