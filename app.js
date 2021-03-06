/*  Data   */
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./img/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./img/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./img/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./img/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./img/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./img/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

/*  Elements   */
const sectionElement = document.querySelector('.section-center');
const categoryElement = document.querySelector('.btn-container');
const spanElement = document.querySelectorAll(".close")[0];
/*  EventListeners   */
window.addEventListener('DOMContentLoaded', load);
spanElement.addEventListener('click', closeModal);

/*****   Functions   *****/

/*  Main Function   */
function load() {
    displayMenuItems(menu);
    displayCategoryItems();
}

// Add all items to UI
function displayMenuItems(menu) {

    let sectionContent = '';

    menu.forEach(item => {
        sectionContent += `
        <article class="menu-item">
            <img src=${item.img} alt="${item.title}" class="photo" />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>
        `;
    });

    sectionElement.innerHTML = sectionContent;

    const imageElement = document.querySelectorAll('.photo');

    imageElement.forEach(item => item.addEventListener('click', showModal));
}

// Add all categories to UI
function displayCategoryItems() {

    categoryElement.innerHTML = `<button type="button" class="filter-btn" data-id="all">all</button>`;
    let categories = [];

    // Create category list
    menu.forEach(item => {
        const index = categories.indexOf(item.category);
        if (index === -1) categories.push(item.category);
    });

    // Create Category Buttons
    categories.forEach(item => {
        categoryElement.innerHTML += `<button type="button" class="filter-btn" data-id="${item}">${item}</button>`;
    });

    const categoryButtons = document.querySelectorAll('.filter-btn');

    categoryButtons.forEach(item => {
        item.addEventListener('click', filter);
    });
}

// Filter foods according to category
function filter({target}) {
    const selectedCategoryName = target.getAttribute("data-id");

    const filteredMenu = menu.filter(item => item.category === selectedCategoryName);

    if (selectedCategoryName === 'all') displayMenuItems(menu);
    else displayMenuItems(filteredMenu);
}

// Show Modal
function showModal({target}) {
    document.querySelector("#modal").style.display = "block";;
    document.querySelector("#img01").src = target.src;
    document.querySelector("#caption").innerHTML = target.alt;
}

// Close Modal
function closeModal() {
    modal.style.display = "none";
}