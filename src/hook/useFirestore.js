import { QuerySnapshot, doc, getDocs, onSnapshot } from "firebase/firestore";
import { cond } from "lodash";
import { useState, useEffect } from "react";
import { db, collection, where, query, orderBy } from "~/Firebase/config";


const useFireStore = (collect, condition) => {

    const [documents, setDocuments] = useState([])
    useEffect(() => {
        
        if (condition) {

            if (!condition.compareValue || !condition.compareValue.length) {
                return
            }

            // temp = query(collectionRef, where(
            //     condition.fieldName,
            //     condition.operator,
            //     condition.compareValue,
            // ))
            // {collectionRef : { fi}}

        }


        // const unSubscibed = getDocs(collectionRef,)
        //     .then((snapshot) => {
        //         const temp = []
        //         snapshot.docs.forEach((doc) => {
        //              temp.push({
        //                 ...doc.data(),
        //                 id: doc.id,
        //             })
        //         })
        //         // console.log(documents)
        //         setDocuments(temp)
        //     })
        //     .catch((err) => {
        //         console.error("error getting")
        //     })
        const unSubscibed = onSnapshot(collection(db,collect), (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => (
                list.push({
                    ...doc.data(),
                    id: doc.id,
                })
            ))
            setDocuments(list)
        })



        return unSubscibed
    }, [collect, condition])

    return documents
}

export default useFireStore