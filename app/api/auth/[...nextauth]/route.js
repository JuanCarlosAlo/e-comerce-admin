import clientPromise from "@/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth, { getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google";


const adminEmails = process.env.ADMIN_EMAILS

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            
        })
    ],
    secret: process.env.GOOGLE_CLIENT_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        session: ({ session, token, user }) => {
            if (!adminEmails.includes(session.user?.email)) {
                throw new Error("Not an admin");
            }
            return session;
        }
    }

  }

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }


export const isAdminRequest = async (req,res)=> {

    const session = await getServerSession(authOptions);
    if (!adminEmails.includes(session?.user?.email)){
        res.status(401);
        res.end();
        throw 'not an admin'
    }
}
