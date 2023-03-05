import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron.jsx"
import Navbar from "./Navbar.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div class="container">
		<Jumbotron/>
		<div className="row row-cols-1 row-cols-md-4 g-4 card-container d-flex">
		<Card title="hello" 
		image="https://i.natgeofe.com/n/284ba48a-3801-4e63-ad95-69a4d2043aad/6994062_2x3.jpg"
		buttonUrl="https://protectorabcn.es/"/>
		<Card title= "dog"
		image="https://i.natgeofe.com/n/284ba48a-3801-4e63-ad95-69a4d2043aad/6994062_2x3.jpg"
		buttonUrl="https://protectorabcn.es/"/>
		<Card title="happy"
		image="https://i.natgeofe.com/n/284ba48a-3801-4e63-ad95-69a4d2043aad/6994062_2x3.jpg"
		buttonUrl="https://protectorabcn.es/"/>
		<Card title="good vibes"
		image="https://i.natgeofe.com/n/284ba48a-3801-4e63-ad95-69a4d2043aad/6994062_2x3.jpg"
		buttonUrl="https://protectorabcn.es/"/>

		</div>
		
		</div>
		<Footer/>
		</>
	);
};


export default Home;



