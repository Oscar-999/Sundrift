import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utill"

const SignIn = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }

  return (
    <div>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn
