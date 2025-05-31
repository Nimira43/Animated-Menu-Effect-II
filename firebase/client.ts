import { initializeApp, getApps } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCCAAJByjbCzhPBXpRv9jihN5O6LIXxI7k',
  authDomain: 'solus-36aba.firebaseapp.com',
  projectId: 'solus-36aba',
  storageBucket: 'solus-36aba.firebasestorage.app',
  messagingSenderId: '1098779179771',
  appId: '1:1098779179771:web:4e449b73018d99a511ce5e'
}

const currentApps = getApps() 
  let auth: Auth
  let storage: FirebaseStorage

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  storage = getStorage(app)
} else {
  const app = currentApps[0]
  auth = getAuth(app)
  storage = getStorage(app)
}

export { auth, storage }