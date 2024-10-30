const search = document.getElementById("search");
const summary = document.getElementById("a");
const loc = document.getElementById("location");
const citi =document.getElementById("citi");

function start(){
	

	
const city =document.getElementById("city").value;
const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1468c59a15msh55db43cf47cf18fp1a893bjsn54538ff766d0',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

async function api(){
try {
	const response = await fetch(url, options);
	const result = await response.json()
	data = result
	location.innerHTML= city;
	console.log(data);
	console.log(data.overall_aqi);
	// summary.innerText = data.overall_aqi
	summary.innerText = data.overall_aqi
	citi.innerHTML = `${city}`;
} catch (error) {
	console.error(error);
}}
api();

}
search.addEventListener("click",start);
