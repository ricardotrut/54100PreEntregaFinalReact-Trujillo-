import { app } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const getitems = async () => {
  const db = getFirestore(app);

  const querySnapshot = await getDocs(collection(db, "items"));
    return querySnapshot.docs.map((doc)=>{
        const data = doc.data()
        return{
            id: doc.id,
            ...data
        }
    })
};

export {getitems}