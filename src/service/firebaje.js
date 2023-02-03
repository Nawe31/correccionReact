
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCF2hvbD1SK2BYmF3W1IGvTpC9jrKZzC6U",
  authDomain: "nawe1337.firebaseapp.com",
  projectId: "nawe1337",
  storageBucket: "nawe1337.appspot.com",
  messagingSenderId: "768857984166",
  appId: "1:768857984166:web:77d7709d98002bcbfc3867"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function obtenerProductos() {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef)
   

    const products = snapshot.docs.map((elem)=> {
      let produc = elem.data();
      produc.id = elem.id;
      return produc;
    });

    return products;
  }


  
  
  export async function obtenerProduct(idURL){
    const productsRef = collection(db, "products");
     const docRef=doc(productsRef,idURL)
     const snapshot = await getDoc (docRef);
     return {...snapshot.data(), id:snapshot.id}


  }


  export async function byCategory (categoryURL){
    const productsRef = collection(db, "products");
    const q = query(productsRef, where ("category", "==", categoryURL));
     
    const snapshot = await getDocs(q)
   

    const products = snapshot.docs.map((elem)=> {
      let produc = elem.data();
      produc.id = elem.id;
      return produc;
    });

    return products;
  }


export default db;
