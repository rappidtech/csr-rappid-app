import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import constantes from'./constMap'
import firebase, { db } from './firebase.config.js';
import 'firebase/firestore';

// import GetUser from './components/TestFB';

function App() {
	return (
		<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
			<Route path="/links/:user" element={<UserPage />} />
			</Routes>
		</Suspense>
		</Router>
	);
}

function UserPage() {
	const { user } = useParams();
	const [userData, setUserData] = useState(null);
	const [userStyles, setUserStyles] = useState(null);
	
	useEffect(() => {

		const fetchData = async () => {
		try {
			const docRef = await db.collection(constantes.collectionUser).doc(user).get();

			if (docRef.exists) {
				console.log('Document exists');
			} else {
				console.log('No such document!');
			}	


			const data = docRef.data().datos 
			const styles = docRef.data().styles 
			
			setUserData(data);
			setUserStyles(styles);

		} catch (error) {
			console.error('Error al cargar datos:', error);
		}
		};

		fetchData();
	}, [user]);

	if (!userData || !userStyles) {
		return <div>Loading...</div>;
	}

	return <Home data={userData} styles={userStyles} />;
}

export default App;
