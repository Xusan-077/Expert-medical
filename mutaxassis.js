let elherotitle = document.querySelector(".page__hero-title");

let id = Number(new URLSearchParams(window.location.search).get("id"));

let find = mutaxasis.find((el) => el.id === id);

elherotitle.innerHTML = `${find.name}   ${find.description}`;
