let cardhead = document.querySelector(".cardhead");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    for (i = 0; i < data.length; i++) {
      let cardiv = document.createElement("div");

      cardhead.appendChild(cardiv);

      var audio = new Audio(`${data[i].sound}`);

      cardiv.innerHTML = `<div class="card">
        <div class="picture"><img src=${data[i].picture} alt=${data[i].name} /></div>
        <div class="header">${data[i].name}</div>
        <div class="explain">
          <div class="color">${data[i].color}</div>
        </div>
        <audio controls>
        <source src=${data[i].sound} type="audio/mpeg">
        </audio>
        <div>
        </div>
      </div>`;
    }
  });
