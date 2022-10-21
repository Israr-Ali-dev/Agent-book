import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // credentials: {
      //     username: { label: "Username", type: "text", placeholder: "jsmith" },
      //     password: { label: "Password", type: "password" },
      // },
      // async authorize(credentials, req) {
      //     // Add logic here to look up the user from the credentials supplied

      //     const { email, password } = credentials;

      //     const apolloClient = initializeApollo();

      //     const signinData = await apolloClient.mutate({
      //         mutation: gqlTemplate.Mutation.GraphQL.signin,
      //         context: { clientName: "graphql" },
      //         variables: {
      //             email,
      //             password,
      //         },
      //     });

      //     const token = signinData?.data?.loginMemberMutation?.Token;

      //     if (!token) {
      //         throw new Error("Please enter correct credential");
      //     }

      //     const { ID, FirstName, Surname, Email } = signinData?.data?.loginMemberMutation?.Member;

      //     const user = {
      //         token,
      //         member: {
      //             id: ID,
      //             firstName: FirstName,
      //             lastName: Surname,
      //             email: Email,
      //         },
      //     };

      //     if (user) {
      //         // Any object returned will be saved in `user` property of the JWT
      //         return user;
      //     } else {
      //         // If you return null or false then the credentials will be rejected
      //         return null;
      //         // You can also Reject this callback with an Error or with a URL:
      //         // throw new Error('error message') // Redirect to error page
      //         // throw '/path/to/redirect'        // Redirect to a URL
      //     }
      // },
    }),
  ],

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn(user, account, profile) { return true },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },

    async redirect({ url, baseUrl }) {
      return url;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.token = user.token;
        token.member = user.member;
      }

      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          member: token.member,
          token: token.token,
        },
      };
    },
  },

  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  // secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: "/", // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // You can set the theme to 'light', 'dark' or use 'auto' to default to the
  // whatever prefers-color-scheme is set to in the browser. Default is 'auto'
  theme: "auto",

  // Enable debug messages in the console if you are having problems
  debug: false,
});
