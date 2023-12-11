const btns=[
{
	id: 1,
	name: 'MAKANAN'
},
{
	id: 2,
	name: 'MINUMAN'
},

]

const filters = [...new Set(btns.map((btn)=>
	{return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
	var {name, id} = btn;
	return(
		"<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
		)
}).join('');

const product = [
{
	id: 1,
	image: 'Makanan/steak.jpg',
	title: 'Steak',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 150,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/burger.jpg',
	title: 'Burger',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 30,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/fishnchips.jpg',
	title: 'Fish & Chips',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 45,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/pizza.jpg',
	title: 'Pizza',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 120,
},
{
	id: 1,
	image: 'Makanan/spaghetti.jpg',
	title: 'Spaghetti Bolognese',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 125,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/ribs.jpg',
	title: 'Ribs',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 150,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/salmon.jpg',
	title: 'Grilled Salmon',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 80,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/chicken.jpg',
	title: 'Chicken Alfredo',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 50,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/pasta.jpg',
	title: 'Pasta Carbonara',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 45,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/salad.jpg',
	title: 'Caesar Salad',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas',
	price: 45,
	category: 'Makanan'
},
];

const categories = [...new Set(product.map((item)=>
	{return item}))]

const filterItems = (a)=>{
	const flterCategories = categories.filter(item);
	function item(value){
		if(value.id==a){
			return(
				value.id
				)
		}
	}
	displayItem(flterCategories)
}


const displayItem = (items) => {
	document.getElementById('root').innerHTML = items.map((item)=>
	{
		var {image, title, price,deskripsi} = item;
		return(
			`<div class='box'>
			<h3>${title}</h3>
			<div class='img-box'>
			<img class='images' src=${image}></img>
			</div><p>${deskripsi} </p>
			<div class='bottom'>
			
			<h2>Rp. ${price}.000</h2>
			</div>
			</div>`)
	}).join('');
}
displayItem(categories);