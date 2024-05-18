import { app } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const createOrder = async (order) => {
  try {
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { createOrder };
