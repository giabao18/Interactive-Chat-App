import { db,collection,addDoc, FieldValue, serverTimestamp } from './config'

export const addDocument = (collections, data) => {
    const query = collection(db,collections)
    addDoc(query, {
        ...data,
        createdAt: serverTimestamp()
    })
}