import { useSession, signIn, signOut } from "next-auth/react"
import Dashboard from "../components/dashboard";
import Singup from "../components/singup";

export default function Component() {
  const { data: session } = useSession()


  if (session) {
    return (
    <Dashboard session={session} />
    )
  }
  return (
    <Singup session={session} />
  )
}