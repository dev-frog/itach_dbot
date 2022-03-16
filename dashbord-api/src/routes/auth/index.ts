import { Router } from "express";
import passport from "passport";
const router = Router();


router.get('/discord', passport.authenticate('discord'), (req,res) => {
    res.send('ok');
});

router.get('/discord/callback', passport.authenticate('discord'), (req,res) => {
    res.send({ msg: 'Success' });
});

router.get('/status', (req,res) => {
    return req.user ? res.send(req.user) : res.status(401).send({ msg: 'Unauthorized' });
})

export default router;