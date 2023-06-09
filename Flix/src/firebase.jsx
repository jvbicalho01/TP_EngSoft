import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA3OsImpGU54DxlZr10ieVgLRwvAaC48c4",
    authDomain: "flix-aa6d5.firebaseapp.com",
    projectId: "flix-aa6d5",
    storageBucket: "flix-aa6d5.appspot.com",
    messagingSenderId: "336543227612",
    appId: "1:336543227612:web:3f14d3578786d2e5e61e19"
}

const fbApp = initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const auth = getAuth(fbApp)

export default fbApp