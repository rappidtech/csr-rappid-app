
import firebase, { db } from '../firebase.config.js';
import { useEffect } from 'react';
import constantes from '../constMap.jsx';

import perfilData from '../edits/perfil.json';
import datosData from '../edits/data.json';
import stylesData from '../edits/styles.json';

export const  GetUser = async (userId) => {
    const userSnapshot = db.collection(constantes.collectionUser).doc(userId).get()
    if (userSnapshot.exists) {
        return userSnapshot.data()
    } else {
        return null
    }
}

const saveDataToFirestore = async () => {
    try {

        const dataToSave = {
            "perfil": perfilData,
            "datos": datosData,
            "styles": stylesData
        };

        const userName = 'agustin';
        const userRef = db.collection(constantes.collectionUser).doc(userName);
        await userRef.set(dataToSave);

        const userSnapshot = await db.collection(constantes.collectionUser).doc(userName).get()
        if (userSnapshot.exists) {
            const user = userSnapshot.data()
            console.log('user', user)
            console.log('dataToSave', dataToSave)
        } else {
            console.log('No existe el usuario')
        }
        
        console.log('Datos guardados exitosamente en Firestore.');
    } catch (error) {
        console.error('Error al guardar datos en Firestore:', error);
    }
    };


const SaveUserData = () => {
    // useEffect(() => {
        
    //     }, []);

    return (
        <div>
            <button onClick={saveDataToFirestore}>Click Aqui</button>
        </div>
    );
};

export default SaveUserData;
