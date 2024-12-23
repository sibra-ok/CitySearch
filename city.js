console.log('working');

let results=fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')

let cities=[]
results.then(blob => blob.json()).then(data=>cities.push(...data));
console.log(cities);
let suggestion=document.querySelector('.suggestions');


function matching(place){ 
let b= cities.filter(place=>{
let search=document.querySelector('.search').value;
let suggestion=document.querySelector('.suggestions');


//return place.city.match(regex) || place.state.match(regex)

let siti=place.city.toLowerCase();
let stat=place.state.toLowerCase();

let citi=siti.match(search)||stat.match(search);

return citi;})


let suggestion=document.querySelector('.suggestions');
suggestion.innerHTML="";
console.log(b)
let search=document.querySelector('.search').value;
//let ok=b.city.match(search);

b.forEach(item=>{
let search=document.querySelector('.search').value;
let suggestion=document.querySelector('.suggestions');
let big=item.city.toLowerCase();
let small=item.state.toLowerCase();
latitude=item.latitude;
longitude=item.longitude;
population=item.population;
rank=item.rank;

let highlightedCity=big.replace(new RegExp(search,'g'),match=>`<span class="Highlighted">${match}</span>`);
let highlightedState=small.replace(new RegExp(search,'g'),match=>`<span class="Highlighted">${match}</span>`);

/*for (let i=0;i<big.length;i++){
if(big[i]===search[0]){
highlightedCity+=`<span class="Highlighted">
${big[i]}<span/>`;
}
else{highlightedCity+=big[i];

}
}*/
//big.split("").map(letter=>search.includes(letter)?`<span class="">
//${letter}<span/>`:letter).join("");
//function numberWithCommas(x) {
//return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//}


let elem=document.createElement('li');
elem.innerHTML=`<li><span>${highlightedState},${highlightedCity}</span><span class="population">${item.population}</span></li>`
suggestion.appendChild(elem);})
}



let filter=document.getElementById('filter');

let searching=document.getElementById('searching')
searching.addEventListener('keyup',function(){
console.log('are yr')
matching();
});
