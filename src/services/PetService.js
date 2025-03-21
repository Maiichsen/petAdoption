import '@/configs/firebase';
import {
  connectFirestoreEmulator,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore();
const petCollection = collection(db, 'pets');

export const getPets = async () => {
    const querySnapshot = await getDocs(petCollection);
    const pets = [];
    querySnapshot.forEach((pet) => pets.push({
        id: pet.id,
        ...pet.data(),
    }));
    return pets;
};

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

