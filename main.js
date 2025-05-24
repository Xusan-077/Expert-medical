// header

let elheaderburgerbtn = document.querySelector(".header__burger-btn");
let elheaderburger = document.querySelector(".header-burger");

elheaderburgerbtn.onclick = () => {
  elheaderburger.classList.toggle("block");
};

// xizmatlar

let elxizmatlist = document.querySelector(".xizmat__list");

function domga(array, justlist) {
  justlist.innerHTML = "";

  array.forEach((el) => {
    justlist.innerHTML += `
               <li class="xizmat__item">
              <a href="./app.html?id=${el.id}" class="xizmat__link">
                <img
                  src="${el.image}"
                  alt=""
                  class="xizmat__item-img"
                />
                <div class="xizmat__text-blog">
                  <h1 class="xizmat__item-title">${el.title}</h1>
                  <p class="xizmat__item-p">
                   ${el.description}
                  </p>
                </div>
              </a>
            </li>
        `;
  });
}

domga(servis, elxizmatlist);

let elxizmatallbtn = document.querySelector(".xizmat__all-btn");

elxizmatallbtn.onclick = () => {
  elxizmatlist.classList.toggle("xizmat-all");
};

//mutaxasis

let elmutaxasislist = document.querySelector(".mutaxasis__list");

function domgamutaxasis(array, justlist) {
  justlist.innerHTML = "";
  array.forEach((el) => {
    justlist.innerHTML += `
      <li class="mutaxasis__item">
              <a href="./mutaxassis.html?id=${el.id}" class="mutaxasis__link">
                <img
                  src="${el.image}"
                  alt=""
                  class="mutaxasis__img"
                />

                <div class="mutaxasis__text-blog">
                  <h1 class="mutaxasis__item-title">
                    ${el.name}
                  </h1>
                  <p class="mutaxasis__item-p">${el.description}</p>
                </div>
              </a>
            </li>
    `;
  });
}

domgamutaxasis(mutaxasis, elmutaxasislist);

let elmutaxasisallbtn = document.querySelector(".mutaxasis__all-btn");

elmutaxasisallbtn.onclick = () => {
  elmutaxasislist.classList.toggle("xizmat-all");
};

// blog

let elbloglist = document.querySelector(".blog__list");

function domgablog(array, justlist) {
  justlist.innerHTML = "";

  array.forEach((el) => {
    justlist.innerHTML += `
         <li class="blog__item">
         <a href="./app.html?id=${el.id}">
              <img src="${el.image}" alt="" class="blog__item-img" />

              <div class="blog__item-text-blog">
                <h3 class="blog__item-title">${el.title}</h3>

                <p class="blog__item-p">
                  ${el.description}
                </p>

                <hr />

                <span class="blog__item-data">${el.date}</span>
              </div>
              </a>
            </li>
    `;
  });
}

domgablog(blog, elbloglist);

let elblogbtn = document.querySelector(".blog__all-btn");

elblogbtn.onclick = () => {
  elbloglist.classList.toggle("xizmat-all");
};
