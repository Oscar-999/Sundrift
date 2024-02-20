import SignUpForm from "../../components/sign-up-form/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utill";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
