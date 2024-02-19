import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const app = initializeApp({
  apiKey: 'AIzaSyCXhTgQWS2SkrisOFkWQAVRFio25Zcqmhc',
  authDomain: 'health-track-228fa.firebaseapp.com',
  projectId: 'health-track-228fa',
  storageBucket: 'health-track-228fa.appspot.com',
  messagingSenderId: '51384979539',
  appId: '1:51384979539:web:61b028285a655b1f44b6a6',
  measurementId: 'G-RPTR31L71P'
})

export const auth = getAuth(app)
export default app
