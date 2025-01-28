import { initializeApp, getApps } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'

// const firebaseConfig = {}

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

export {auth, storage}