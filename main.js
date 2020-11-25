document.addEventListener('DOMContentLoaded', () => {
  createList();
  createElements(houses[0]);
  createImages(houses[0]);
})

const houses = [
  {
    id: 0,
    name: 'stark',
    slogan: '"Winter Is Coming"',
    description: 'House Stark of Winterfell is a Great House of Westeros and the royal house of the Kingdom of the North. They rule over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and early on in Daenerys Targaryen\'s war for Westeros, the leaders of House Stark ruled over the region as the Kings in the North.',
    mapPosition: '',
    dead: [1]
  },
  {
    id: 1,
    name: 'greyjoy',
    slogan: '"What Is Dead May Never Die"',
    description: 'House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.',
    mapPosition: '',
    dead: [1]
  },
  {
    id: 2,
    name: 'arryn',
    slogan: '"As High as Honor"',
    description: 'House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Defenders of the Vale and Wardens of the East under the Targaryen, Baratheon, and Lannister dynasties. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with Yohn Royce holding actual power over the house.',
    mapPosition: '',
    dead: [1]
  },
  {
    id: 3,
    name: 'lannister',
    slogan: '"A Lannister Always Pays His Debts"',
    description: 'House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and one of its oldest dynasties. It was also the royal house of the Seven Kingdoms following the extinction of House Baratheon of King\'s Landing, which had been their puppet house during the War of the Five Kings, for a brief stint of time until House Targaryen took back the Iron Throne in Daenerys Targaryen\'s war for Westeros.',
    mapPosition: '',
    dead: [1]
  },
  {
    id: 4,
    name: 'tully',
    slogan: '"Family, Duty, Honor"',
    description: 'House Tully of Riverrun is a Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background.',
    mapPosition: '',
    dead: [1]
  },
  {
    id: 5,
    name: 'targaryen',
    slogan: '"Fire and Blood"',
    description: 'House Targaryen of Dragonstone is a noble family of Valyrian descent who once ruled the Seven Kingdoms of Westeros. It eventually became the first royal house of the Seven Kingdoms, as House Targaryen of King\'s Landing. The only family of dragonlords who survived the Doom of Valyria, the Targaryens left the Valyrian Freehold twelve years before the Doom. They resided for more than a century at Dragonstone on the island of the same name, until Aegon the Conqueror and his sister-wives, Visenya and Rhaenys, began the first of the Wars of Conquest in 2 BC.',
    mapPosition: '',
    dead: [1]
  },
  {
    id: 6,
    name: 'tyrell',
    slogan: '"Growing Strong"',
    description: 'House Tyrell of Highgarden is an extinct Great House of Westeros. It ruled over the Reach, a vast, fertile, and heavily-populated region of southwestern Westeros, from their castle-seat of Highgarden as Lords Paramount of the Reach and Wardens of the South after taking control of the region from House Gardener during the Targaryen conquest.',
    mapPosition: '',
    dead: [1]
  },
  {
    id: 7,
    name: 'baratheon',
    slogan: '"Ours is the Fury"',
    description: 'House Baratheon of Storm\'s End is a Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister took control of the throne, though lost it to House Targaryen. House Baratheon traditionally rules the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm\'s End.',
    mapPosition: '',
    dead: [1]
  },
  {
    id: 8,
    name: 'martell',
    slogan: '"Unbowed, Unbent, Unbroken"',
    description: 'House Martell of Sunspear is one of the Great Houses of Westeros. It rules the peninsula of Dorne in the far south of the continent from their castle Sunspear. Though loyal to the Iron Throne, the Martells were never conquered by the Targaryens and pursued a more isolated role in wider political events since Robert\'s Rebellion.',
    mapPosition: '',
    dead: [1]
  },
]


// const button = document.querySelector('.menu-item');
let button;
let icons;
const content = document.querySelector('.content');
const house = document.querySelector('.house');
const shield = document.querySelector('.shield');
const slogan = document.querySelector('.slogan');
const description = document.querySelector('.description');
const background = document.querySelector('.content-container');
const menu = document.querySelector(".menu-container");
const images = document.querySelector(".content-img-container");
const fragment = document.createDocumentFragment();

function createList() {
  houses.forEach(item => {
    button = document.createElement('li');
    button.className = ("menu-item");
    button.innerHTML = `
    <img class="menu-item-img" src="/assets/shields/${item.name}.png"><span>House ${item.name}</span>`;
    menu.appendChild(button);
    button.addEventListener('click', () => {
        createElements(item);
        createImages(item);
      })
    })
}

function createElements(item) {
  house.innerText = `house ${item.name}`;
  shield.setAttribute('src', `/assets/shields/${item.name}.png`);
  slogan.innerText = `${item.slogan}`;
  description.innerText = `${item.description}`;
  background.style.backgroundColor = `var(--${item.name})`;
}

function createImages(item) {
  const number = 4;
  
  if (images.firstElementChild === null) {
    for (let i = 1; i <= number; i++) {
      image = document.createElement('div');
      image.className = ("content-img");
      images.appendChild(image);
      image.style.backgroundImage = `url("/assets/members/member-${item.name}-${i}.jpg")`;
    }
  } 


}

