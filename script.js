var produkte = [
    {
        img: "img/cera.jpg",
        price: 25,
        name: "Lares"
    },

    {
        img: "img/loreal.jpg",
        price: 99,
        name: "Serum"
    },

    {
        img: "img/spf.jpg",
        price: 45,
        name: "SPF"
    },
    
    {
        img: "img/nivea.webp",
        price: 22,
        name: "Hidratues"
    },

    {
        img: "img/missha.webp",
        price: 12,
        name: "BB cream"
    },

    {
        img: "img/12.webp",
        price: 11,
        name: "SERum BJ"
    },

    {
        img: "img/paula.webp",
        price: 33,
        name: "BHA & AHA"
    },

    {
        img: "img/2.jpg",
        price: 56,
        name: "LIP care"
    },
];
console.log('test')

var procontainer = document.getElementById("pro-container");

produkte.forEach(function(produkt) {
   var produktElement = document.createElement("div");
   produktElement.classList.add("produkt");
 
   var imgElement = document.createElement("img");
   imgElement.src = produkt.img;
   produktElement.appendChild(imgElement);
 
   var nameElement = document.createElement("h3");
   nameElement.textContent = produkt.name;
   produktElement.appendChild(nameElement);
 
   var priceElement = document.createElement("p");
   priceElement.textContent = "Cmimi: $" + produkt.price;
   produktElement.appendChild(priceElement);
 
   procontainer.appendChild(produktElement);

});
