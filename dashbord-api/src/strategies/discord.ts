import { Strategy as DiscordStrategy } from 'passport-discord';
import passport, { Profile } from 'passport';
import { VerifyCallback } from 'passport-oauth2';
import { User } from '../database/schemas';

passport.serializeUser((user: any, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    return user ? done(null, user) : done(null, null);
  } catch (error) {
    return done(error);
  }
});

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SCERET!,
      callbackURL: process.env.DISCORD_REDIRECT_URI,
      scope: ['identify', 'email', 'guilds'],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        const user = await User.findOneAndUpdate(
          { discordID: profile.id },
          { accessToken, refreshToken },
          { upsert: true, new: true }
        );
        if (user) {
          done(null, user);
        } else {
          const newUser = await new User({
            discordID: profile.id,
            accessToken,
            refreshToken,
            name: profile.username,
          }).save();
          done(null, newUser);
        }
      } catch (error) {
        done(error as any, undefined);
      }
    }
  )
);
