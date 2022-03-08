import { Strategy as DiscordStrategy } from 'passport-discord';
import passport, { Profile } from 'passport';
import { VerifyCallback } from 'passport-oauth2';

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SCERET!,
      callbackURL: process.env.DISCORD_REDIRECT_URI,
      scope: ['identify','email' ,'guilds'],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {}
  )
);
