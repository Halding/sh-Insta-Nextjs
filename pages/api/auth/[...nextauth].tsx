import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        // ...add more providers here
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user!.name = session.user?.name?.split(" ").join("").toLocaleLowerCase();


            return session // The return type will match the one returned in `useSession()`
        },
    },

    pages: {
        signIn: "/auth/signin"
    },



})