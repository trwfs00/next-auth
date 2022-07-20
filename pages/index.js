import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';
import Head from 'next/head';

export default function Component() {
  const { data: session } = useSession()
  console.log(session,' session ');

  if (session) {
    return (
      <>

        <div className="container d-flex justify-content-center mt-5">

          <div className="card cardWidth">

            <div className="top-container">

              <Image src={session.user.image} alt='user profile image' className="img-fluid profile-image" width="70px" height="70px" />

              <div className="ml-3 mb-4">
                <h5 className="name">{session.user.name}</h5>
                <p className="mail">{session.user.email}</p>
              </div>
            </div>
            <button className="mt-4 mx-auto w-75" onClick={() => signOut()}>Sign out</button>
          </div>

        </div>

      </>
    )
  }
  return (
    <>
  <div className="container">
    <div className="row">
      <div className="mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                <button className="btn btn-google btn-login text-uppercase fw-bold mx-auto" onClick={() => signIn()} type="submit">
                  <i className="fab fa-google me-2"></i> Sign in with Github
                </button>

          </div>
        </div>
      </div>
    </div>
  </div>


    </>
  )
}