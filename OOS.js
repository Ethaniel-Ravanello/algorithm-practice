// let data = {
// 	companyName: "Jojonomic",
// 	numberOfEmployee: 100,
// 	receiveNewEmployee: true,
// 	location: {
// 		address: "jakarta jalan nangka",
// 		provinsi: "Dki",
// 	},
// 	employeList: [
// 		{ name: "Employee 1", age: 25 },
// 		{ name: "Employee 2", age: 27 },
// 	],
// };

// console.log(data.companyName);
// console.log(data.numberOfEmployee);
// console.log(data.location.provinsi);
// console.log(data.employeList[1].age);

// let table = [

//         {
//             Name: "Employee1",
//             Gender : "Male",
//             Age : 20,
//             Permanen : true,
//         },
//         {
//             Name: "Employee2",
//             Gender : "Female",
//             Age : 25,
//             Permanen : false,
//         },
//         {
//             Name: "Employee3",
//             Gender : "Male",
//             Age : 33,
//             Permanen : true,
//         },

// ]

// let json = JSON.stringify(table)

// fetch(json)
// .then(response => response.json())
// .then(data => showTable(data))

// function showTable(data){
//     console.log(data)
// }

let produk = [
	{
		Name: "Employee1",
		Gender: "Male",
		Age: 20,
		Permanen: true,
		itemType: "Food",
	},
	{
		Name: "Employee2",
		Gender: "Female",
		Age: 25,
		Permanen: false,
		itemType: "Drink",
	},
	{
		Name: "Employee3",
		Gender: "Male",
		Age: 33,
		Permanen: true,
		itemType: "Tools",
	},
	{
		Name: "Employee3",
		Gender: "Male",
		Age: 33,
		Permanen: true,
		itemType: "Cleaner",
	},
];

let value = Object.values(produk);

// function pemisahBasket(item){
//     let organicBasket = []
//     let otherBasket = []

//     for(let i = 0; i < item.length; i++){
//         if(item[i].itemType === "Food" || item[i].itemType === "Drink"){
//             organicBasket.push(item[i].itemType)
//         }
//         else if(item[i].itemType === "Tools" || item[i].itemType === "Cleaner"){
//             otherBasket.push(item[i].itemType)
//         }
//     }
//     return `${organicBasket} ${otherBasket}`
// }

// console.log(pemisahBasket(value))

const fileJson = {
	shopingList: [
		{
			id: 1,
			Item: "IDM Ramos Super 5KG",
			Price: 59900,
			Discount: 4000,
			Value: 1,
		},
		{
			id: 2,
			Item: "So Klin Softergen 800",
			Price: 14700,
			Discount: 2200,
			Value: 1,
		},
		{
			id: 3,
			Item: "Mogu Mogu Lyche 320",
			Price: 59900,
			Discount: 0,
			Value: 1,
		},
		{
			id: 4,
			Item: "Plastik BSR",
			Price: 59900,
			Discount: 0,
			Value: 3,
		},
	],
};
let filter = fileJson.shopingList.filter((items) => items.Discount !== 0);

let objectName;
let companyName;
let employeeOne;

console.log(filter);
