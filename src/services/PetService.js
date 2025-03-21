import '@/configs/firebase';
import {
  connectFirestoreEmulator,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore();
const petCollection = collection(db, 'pets');

 const getPets = async () => {
    const querySnapshot = await getDocs(petCollection)
    return querySnapshot.map(doc =>{
        return {
            id: doc.id,
            ...doc.data()
        }
    })
}

export const onUpdate = (callback) => {
    onSnapshot(petCollection, async () =>{
        callback(await getPets());
    });
};

export const createPet = async (pets) => {
    await addDoc(petCollection, {
        ...pets,
        createdAt: new Date(),
        adopted: false,
    }) 
}