import { setDoc, getDatabase, db,collection,addDoc, FieldValue, serverTimestamp, doc } from './config'

export const addDocument = async (collections, data) => {
    const Collections = collection(db,collection)
    await addDoc(Collections, {
        ...data,
        createdAt: serverTimestamp()
    })
}