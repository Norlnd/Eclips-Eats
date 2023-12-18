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
	deskripsi: 'Steak adalah potongan daging sapi yang dipanggang hingga matang. Daging steak dapat berbagai jenis, seperti sirloin, tenderloin, atau ribeye.',
	price: 150,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/burger.jpg',
	title: 'Burger',
	deskripsi: 'Burger adalah roti berisi daging cincang yang biasanya diisi dengan sayuran, keju, saus, dan kadang-kadang bacon. Burger sering disajikan dengan kentang goreng.',
	price: 30,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/fishnchips.jpg',
	title: 'Fish & Chips',
	deskripsi: 'Fish and Chips adalah hidangan Inggris yang terdiri dari ikan goreng dengan lapisan tepung renyah, disajikan dengan kentang goreng.',
	price: 45,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/pizza.jpg',
	title: 'Pizza',
	deskripsi: 'Pizza dengan campuran berbagai topping seperti pepperoni, sosis, jamur, paprika, bawang, dan zaitun.',
	price: 120,
},
{
	id: 1,
	image: 'Makanan/spaghetti.jpg',
	title: 'Spaghetti Bolognese',
	deskripsi: 'Spaghetti Bolognese adalah pasta yang disajikan dengan saus daging tomat yang kaya rasa.',
	price: 125,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/ribs.jpg',
	title: 'Ribs',
	deskripsi: 'Ribs adalah tulang daging yang dipanggang dengan saus BBQ, yang di sajikan dengan kentang dan sayur.',
	price: 150,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/salmon.jpg',
	title: 'Grilled Salmon',
	deskripsi: 'Grilled Salmon adalah potongan salmon yang dipanggang dan sering disajikan dengan sayuran panggang atau saus lemon.',
	price: 80,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/chicken.jpg',
	title: 'Chicken Alfredo',
	deskripsi: 'Chicken Alfredo adalah hidangan pasta yang berisi potongan ayam dan saus Alfredo, yang terbuat dari mentega, krim, dan keju parmesan.',
	price: 50,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/pasta.jpg',
	title: 'Pasta Carbonara',
	deskripsi: 'Pasta Carbonara adalah pasta yang disajikan dengan saus krim berbasis telur dan keju parmesan, seringkali dicampur dengan potongan daging seperti bacon atau pancetta.',
	price: 45,
	category: 'Makanan'
},
{
	id: 1,
	image: 'Makanan/salad.jpg',
	title: 'Caesar Salad',
	deskripsi: 'Caesar Salad adalah salad dengan daun romaine, crouton, keju parmesan, dan saus Caesar yang khas.',
	price: 45,
	category: 'Makanan'
},
{
	id: 2,
	image: 'minuman/wine.jpg',
	title: 'Red Wine',
	deskripsi: 'Red wine dibuat dengan memproses anggur merah atau anggur hitam beserta kulitnya. ',
	price: 200,
	category: 'Mimuman'
},
{
	id: 2,
	image: 'minuman/cocktail.jpg',
	title: 'Manhattan Cocktail',
	deskripsi: 'Manhattan adalah nama koktail yang dibuat dari wiski, vermouth manis, es, dan bitters. Wiski yang biasa dipakai adalah wiski gandum hitam, wiski Kanada, dan wiski Tennessee. ',
	price: 50,
	category: 'Mimuman'
},
{
	id: 2,
	image: 'minuman/sangria.jpg',
	title: 'Sangria',
	deskripsi: 'Sangria merupakan sejenis wine berbahan dasar anggur, brendi, gula, dan air soda. Biasanya, sangria dibuat dengan anggur merah, tapi kamu juga dapat menggunakan anggur putih bahkan anggur mawar. Minuman asal Spanyol ini disajikan dengan tambahan potongan buah segar yang menyegarkan. ',
	price: 60,
	category: 'Mimuman'
},
{
	id: 2,
	image: 'minuman/mojito.jpg',
	title: 'Mojito',
	deskripsi: 'Mojito adalah koktail yang terdiri dari lima bahan utama: rum putih, gula (biasanya gula batu), jus lemon, daun mint, dan air soda. Minuman ini terkenal karena kesegarannya dan merupakan salah satu koktail yang paling populer di dunia.',
	price: 45,
	category: 'Mimuman'
},
{
	id: 2,
	image: 'minuman/ceder.jpg',
	title: 'Ceders',
	deskripsi: 'Ceders merupakan merek minuman gin non-alkohol yang diciptakan untuk meniru rasa dan pengalaman minum gin tanpa efek alkohol. Ceders menawarkan beberapa varian rasa yang terinspirasi oleh botani alami, seperti juniper dan tanaman herbal lainnya yang biasanya ditemukan dalam gin. Minuman Ceders menjadi pilihan populer bagi mereka yang ingin menikmati rasa gin tanpa efek alkohol. ',
	price: 40,
	category: 'Mimuman'
},
{
	id: 2,
	image: 'minuman/fruittea.jpg',
	title: 'Fruittea',
	deskripsi: 'Fruit tea adalah minuman yang terbuat dari campuran teh dengan berbagai jenis buah-buahan. Minuman ini biasanya disajikan dingin dan terkadang memiliki rasa manis alami dari buah-buahan yang digunakan. ',
	price: 35,
	category: 'Mimuman'
},
{
	id: 2,
	image: 'minuman/egg.jpg',
	title: 'Eggnog',
	deskripsi: 'Minuman ini terbuat dari campuran telur, susu, gula, dan rempah-rempah, biasanya dicampur dengan minuman beralkohol seperti brendi, rum, wiski, atau burbon. Eggnog memiliki rasa kaya, krimi, dan sedikit manis. Minuman ini sering dihidangkan selama musim liburan, terutama pada Natal dan Tahun Baru. ',
	price: 50,
	category: 'Mimuman'
},
{
	id: 2,
	image: 'minuman/lemonade.jpg',
	title: 'Lemonade',
	deskripsi: 'Lemonade adalah minuman yang terbuat dari perasan lemon, air, dan gula. Minuman ini dikenal karena rasa segar dan asam yang menyegarkan, terutama saat disajikan dingin dengan es. ',
	price: 25,
	category: 'Mimuman'
},
{
	id: 2,
	image: 'minuman/cocacola.jpg',
	title: 'Coca Cola',
	deskripsi: 'Coca-Cola adalah minuman bersoda berkarbonasi yang sangat populer dan dikenal di seluruh dunia. Minuman ini pertama kali diperkenalkan pada tahun 1886 oleh seorang apoteker bernama John Pemberton di Atlanta, Georgia, Amerika Serikat. Coca-Cola terbuat dari campuran sirup yang mengandung gula, rasa, dan kafein yang kemudian dicampur dengan air berkarbonasi. ',
	price: 20,
	category: 'Mimuman'
},
{
	id: 2,
	image: 'minuman/coffee.jpg',
	title: 'Coffee',
	deskripsi: 'Caffé latte atau kopi latte adalah campuran 1/3 espresso dengan 2/3 steamed milk. Buih susu hanya tipis di permukaan. Meski komposisinya mirip dengan cappuccino, foam pada minuman ini hanya sedikit sehingga rasanya lebih milky dan creamy. ',
	price: 30,
	category: 'Mimuman'
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