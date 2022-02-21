import React, { useEffect, useState } from 'react';
import { Header } from './header';
import * as blobutil from 'blob-util';

export function Container() {
	let [image, setImage] = useState('');

	const fetchImage = async () => {
		const res = await fetch('https://dog.ceo/api/breeds/image/random')
		const imageBlob = await res.blob()
		console.log('imageBlob', imageBlob)
		const imageObjectUrl = await blobutil.createObjectURL(imageBlob);
		console.log('imageUrl', imageObjectUrl)
		setImage(imageObjectUrl);
		console.log('image', image)
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
				<img src={image} alt='A picture of a dog'/>
			</div>
			<div>
				<button onClick={() => fetchImage()}>
					<label>Show me another good boy</label>
				</button>	
			</div>
		</section>
	</>
}