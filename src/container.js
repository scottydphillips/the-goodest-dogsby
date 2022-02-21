import React, { useEffect, useState } from 'react';
import { Header } from './header';
import * as blobutil from 'blob-util';

export function Container() {
	let [image, setImage] = useState('');

	const fetchImage = async () => {
		const res = await fetch('https://dog.ceo/api/breeds/image/random')
		if (res.status !== 200) throw new Error ('Error retrieving picture')
		const imageJson = await res.json()
		setImage(imageJson.message);
	}

	useEffect(() => {
		fetchImage();
	}, []);

	return <>
		<header>
			<Header />
		</header>
		<section>
			<h2>🐶 🐕 🐶 🐕 🐶</h2>
			<div>
				<img src={image} alt='A good dog' style={{ height: '350px '}}/>
				<p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Isn't that a cute little doggo?</p>
			</div>
			<div style={{}}>
				<button style={{ backgroundColor: 'blueviolet', color: "white", borderRadius: "5% 5%", fontSize: '1rem' }} onClick={() => fetchImage()}>
					<label>Show me another good boy</label>
				</button>	
			</div>
		</section>
	</>
}