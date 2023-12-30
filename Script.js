
let count = 0;
const section = document.getElementById("Recipes");
const All_cards = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];
while (count < All_cards.length) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${All_cards[count].imageSrc}">
    <p>${All_cards[count].type}</p>
    <div class="card-head">
        <span class="head">${All_cards[count].name}</span>
        <span class="rating"><img src="./images/Star.png">${All_cards[count].rating}</span>
    </div>
    <div class="card-base">
        <span class="duration">${All_cards[count].time}</span>
        <span class="fav-and-comm">
            <i class="fa-regular fa-heart fa-lg" onclick="like(this)"></i>
            <i class="fa-regular fa-comment fa-lg"></i>
        </span>
    </div>`;
    section.appendChild(card);
    count++;
}
function like(item){
    let parent=item.parentNode.parentNode.parentNode;
    if(parent.isLiked){
        item.style.color = "#191919";
        parent.isLiked = false;
    }
    else {
        item.style.color = "#ec4b4b";
        parent.isLiked = true;
    }
}
const rating = document.querySelectorAll("input[type=checkbox]");
for (let item of rating) {
    item.addEventListener("change", () => {
        if (item.checked) {
            const recipes = document.getElementById("Recipes");
            console.log(recipes);
            while (recipes.hasChildNodes()) {
                recipes.removeChild(recipes.firstChild);
            }
            if (item.value == "above4") {
                for (let i of All_cards) {
                    if (i.rating >= 4) {
                        const card = document.createElement("div");
                        card.className = "card";
                        card.innerHTML = `<img src="${i.imageSrc}">
                        <p>${i.type}</p>
                        <div class="card-head">
                            <span class="head">${i.name}</span>
                            <span class="rating"><img src="./images/Star.png">${i.rating}</span>
                        </div>
                        <div class="card-base">
                            <span class="duration">${i.time}</span>
                            <span class="fav-and-comm">
                                <i class="fa-regular fa-heart fa-lg" onclick="like(this)"></i>
                                <i class="fa-regular fa-comment fa-lg"></i>
                            </span>
                        </div>`;
                        section.appendChild(card);
                    }
                }
            }
            if (item.value == "below4") {
                for (let i of All_cards) {
                    if (i.rating < 4) {
                        const card = document.createElement("div");
                        card.className = "card";
                        card.innerHTML = `<img src="${i.imageSrc}">
                        <p>${i.type}</p>
                        <div class="card-head">
                            <span class="head">${i.name}</span>
                            <span class="rating"><img src="./images/Star.png">${i.rating}</span>
                        </div>
                        <div class="card-base">
                            <span class="duration">${i.time}</span>
                            <span class="fav-and-comm">
                                <i class="fa-regular fa-heart fa-lg" onclick="like(this)"></i>
                                <i class="fa-regular fa-comment fa-lg"></i>
                            </span>
                        </div>`;
                        section.appendChild(card);
                    }
                }
            }
        }
        if(item.checked==false){
            const recipes = document.getElementById("Recipes");
            console.log("unchecked");
            while (recipes.hasChildNodes()) {
                recipes.removeChild(recipes.firstChild);
            }
            for (let i of All_cards) {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `<img src="${i.imageSrc}">
                    <p>${i.type}</p>
                    <div class="card-head">
                        <span class="head">${i.name}</span>
                        <span class="rating"><img src="./images/Star.png">${i.rating}</span>
                    </div>
                    <div class="card-base">
                        <span class="duration">${i.time}</span>
                        <span class="fav-and-comm">
                            <i class="fa-regular fa-heart fa-lg" onclick="like(this)"></i>
                            <i class="fa-regular fa-comment fa-lg"></i>
                        </span>
                    </div>`;
                section.appendChild(card);
            }
        }
    })
}
const filter = document.getElementsByClassName("filter");
for (let item of filter) {
    item.addEventListener("click", (event) => {
        const recipes = document.getElementById("Recipes");
        while (recipes.hasChildNodes()) {
            recipes.removeChild(recipes.firstChild);
        }
        console.log(recipes);
        if (item.id == "show-all-recipes") {
            console.log("all recipes");
            for (let i of All_cards) {
                console.log(i);
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `<img src="${i.imageSrc}">
                        <p>${i.type}</p>
                        <div class="card-head">
                            <span class="head">${i.name}</span>
                            <span class="rating"><img src="./images/Star.png">${i.rating}</span>
                        </div>
                        <div class="card-base">
                            <span class="duration">${i.time}</span>
                            <span class="fav-and-comm">
                                <i class="fa-regular fa-heart fa-lg" onclick="like(this)"></i>
                                <i class="fa-regular fa-comment fa-lg"></i>
                            </span>
                        </div>`;
                section.appendChild(card);
            }
        }
        else if (item.id == "show-veg-recipes") {
            for (let i of All_cards) {
                if (i.type == "veg") {
                    const card = document.createElement("div");
                    card.className = "card";
                    card.innerHTML = `<img src="${i.imageSrc}">
                        <p>${i.type}</p>
                        <div class="card-head">
                            <span class="head">${i.name}</span>
                            <span class="rating"><img src="./images/Star.png">${i.rating}</span>
                        </div>
                        <div class="card-base">
                            <span class="duration">${i.time}</span>
                            <span class="fav-and-comm">
                                <i class="fa-regular fa-heart fa-lg" onclick="like(this)"></i>
                                <i class="fa-regular fa-comment fa-lg"></i>
                            </span>
                        </div>`;
                    section.appendChild(card);
                }
            }
        }
        else if (item.id == "show-non-veg-recipes") {
            for (let i of All_cards) {
                if (i.type == "non-veg") {
                    const card = document.createElement("div");
                    card.className = "card";
                    card.innerHTML = `<img src="${i.imageSrc}">
                        <p>${i.type}</p>
                        <div class="card-head">
                            <span class="head">${i.name}</span>
                            <span class="rating"><img src="./images/Star.png">${i.rating}</span>
                        </div>
                        <div class="card-base">
                            <span class="duration">${i.time}</span>
                            <span class="fav-and-comm">
                                <i class="fa-regular fa-heart fa-lg" onclick="like(this)"></i>
                                <i class="fa-regular fa-comment fa-lg"></i>
                            </span>
                        </div>`;
                    section.appendChild(card);
                }
            }
        }
    })
}
const search = document.querySelector("#search #search-bar input");
search.addEventListener("keyup", (event) => {
    console.log(search.value);
    const recipes = document.getElementById("Recipes");
    while (recipes.hasChildNodes()) {
        recipes.removeChild(recipes.firstChild);
    }
    for (let i of All_cards) {
        if (i.name.toLowerCase().includes(search.value.toLowerCase())) {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<img src="${i.imageSrc}">
                        <p>${i.type}</p>
                        <div class="card-head">
                            <span class="head">${i.name}</span>
                            <span class="rating"><img src="./images/Star.png">${i.rating}</span>
                        </div>
                        <div class="card-base">
                            <span class="duration">${i.time}</span>
                            <span class="fav-and-comm">
                                <i class="fa-regular fa-heart fa-lg" onclick="like(this)"></i>
                                <i class="fa-regular fa-comment fa-lg"></i>
                            </span>
                        </div>`;
            section.appendChild(card);
        }
    }
})
const drawer=document.getElementById("drawer-icon");
drawer.addEventListener("click",()=>{
    // const body=document.getElementsByTagName("body")[0];
    // const nav=document.getElementsByTagName("nav")[0];
    const show_drawer=document.querySelector("#drawer-menu");
    const icon=document.getElementById("drawer");
    const menu=document.getElementById("menu");
    const dummy=document.getElementById("dummy");
    dummy.style.display="inline";
    show_drawer.style.display="flex";
    // nav.style.background="white";
    // nav.style.height="100%";
    // show_drawer.style.background="rgba(0, 0, 0, 0.50)";
    icon.style.display="none";
    menu.style.display="none";
    // body.style.background="rgba(0, 0, 0, 0.50)";
    console.log("drawer");
})