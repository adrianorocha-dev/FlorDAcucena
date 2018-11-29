import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyCVNzTtr-Py0lmb25IYX_T6OlEERSVjocw",
    authDomain: "flordacucena-58ae1.firebaseapp.com",
    databaseURL: "https://flordacucena-58ae1.firebaseio.com",
    projectId: "flordacucena-58ae1",
    storageBucket: "flordacucena-58ae1.appspot.com",
    messagingSenderId: "413283999195"
})

export const db = app.database()
export const pedidosRef = db.ref('pedidos')
export const auth = app.auth()