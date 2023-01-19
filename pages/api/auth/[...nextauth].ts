import NextAuth,{NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }) ,
    
  ],
  theme: {
    colorScheme: "dark",
  },
  secret: process.env.SECRET
  
}

export default NextAuth(authOptions)