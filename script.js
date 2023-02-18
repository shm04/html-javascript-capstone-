const menu = document.querySelector('.sections-navbar');
const navSec = document.querySelectorAll('.sec-navbar');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const hamBtn = document.querySelector('.ham-btn');

function toggleMenu() {
  if (menu.classList.contains('showMenu') && window.innerWidth <= 768) {
    menu.classList.remove('showMenu');
    closeBtn.style.display = 'none';
    hamBtn.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeBtn.style.display = 'block';
    hamBtn.style.display = 'none';
  }
}

menuBtn.addEventListener('click', toggleMenu);
navSec.forEach(
  (navSec) => {
    navSec.addEventListener('click', toggleMenu);
  },
);

const artists = {
  image: ['imgs/playboi-carti.jpeg', 'imgs/travis-scott.jpeg', 'imgs/future.jpeg', 'imgs/lil-uzi-vert.jpg', 'imgs/kodak-black.jpg', 'imgs/lil-wayne.jpeg'],
  artistName: ['Playboi Carti', 'Travis Scott', 'Future', 'Lil Uzi Vert', 'Kodak Black', 'Lil Wayne'],
  intro: ['American rapper', 'American rapper, singer, songwriter, and record producer', 'American rapper, singer, and songwriter', 'American rapper, singer, songwriter, and record executive'],
  info: ['Member of ASAP mob colectives.', 'Member of Huncho Jack and The Scotts.', 'Two times Grammy Awards winner.', 'Member of Roc Nation and Atlantic.', 'Member of Capitol.', 'Winner of 143 music awards.'],
};

const body = document.querySelector('.featured-artists');

window.addEventListener('load', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const artDiv = document.createElement('div');
  artDiv.className = 'artDiv';
  artDiv.innerHTML = `
  <h1 class="artist-title">Featured artists</h1>
        <span class="span-red"></span>
        <div class="artists-main-box">
            <div class="artist-box playboi-carti">
                <img class="artist-img" src=${artists.image[0]} alt="Playboi Carti image">
                <div class="artist-info-box">
                    <h1 class="artist-subtitle">${artists.artistName[0]}</h1>
                    <h2 class="artist-intro">${artists.intro[0]}</h2>
                    <p class="artist-info">${artists.info[0]}</p>
                </div>
            </div>
            <div class="artist-box travis-scott">
                <img class="artist-img" src=${artists.image[1]} alt="Travis Scott image">
                <div class="artist-info-box">
                    <h1 class="artist-subtitle">${artists.artistName[1]}</h1>
                    <h2 class="artist-intro">${artists.intro[1]}</h2>
                    <p class="artist-info">${artists.info[1]}</p>
                </div>
            </div>
            <div class="artist-box future">
                <img class="artist-img" src=${artists.image[2]} alt="Future image">
                <div class="artist-info-box">
                    <h1 class="artist-subtitle">${artists.artistName[2]}</h1>
                    <h2 class="artist-intro">${artists.intro[0]}</h2>
                    <p class="artist-info">${artists.info[2]}</p>
                </div>
            </div>
            <div class="artist-box lil-uzi-vert">
                <img class="artist-img" src=${artists.image[3]} alt="Lil Uzi Vert image">
                <div class="artist-info-box">
                    <h1 class="artist-subtitle">${artists.artistName[3]}</h1>
                    <h2 class="artist-intro">${artists.intro[2]}</h2>
                    <p class="artist-info">${artists.info[3]}</p>
                </div>
            </div>
            <div class="artist-box kodak-black">
                <img class="artist-img" src=${artists.image[4]} alt="Kodak Black image">
                <div class="artist-info-box">
                    <h1 class="artist-subtitle">${artists.artistName[4]}</h1>
                    <h2 class="artist-intro">${artists.intro[0]}</h2>
                    <p class="artist-info">${artists.info[4]}</p>
                </div>
            </div>
            <div class="artist-box lil-wayne">
                <img class="artist-img" src=${artists.image[5]} alt="Lil Wayne image">
                <div class="artist-info-box">
                    <h1 class="artist-subtitle">${artists.artistName[5]}</h1>
                    <h2 class="artist-intro">${artists.intro[3]}</h2>
                    <p class="artist-info">${artists.info[5]}</p>
                </div>
            </div>
        </div>
        <a class="more-btn">MORE<img class="expand-icon" src="imgs/expand-btn.png"></a>
  `;

  main.appendChild(artDiv);
  body.appendChild(main);
});
