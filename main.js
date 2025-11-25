import { results } from "./script.js";
console.log(results);

const mainImg = document.createElement("img");
mainImg.src =
  "https://fastly.picsum.photos/id/534/1000/800.jpg?hmac=tFbU1nZ2RnQNroI_ToBhH-LFB8KNjyWoc3bVv5G9Wkw";
document.body.appendChild(mainImg);
mainImg.classList.add("main-img");

const container = document.getElementById("images-list");

results.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `card-${index}`;

  const img = document.createElement("img");
  img.src = item.webImage.url;
  img.alt = item.title;
  img.classList.add("card-img");

  const title = document.createElement("h3");
  title.textContent = item.title;
  title.classList.add("card-title");

  const details = document.createElement("div");
  details.classList.add("details");
  details.id = `details-${index}`;
  details.innerHTML = `
        <p>${item.longTitle}</p>
        <a href="${item.links.web}" target="_blank">Visit link</a>
    `;

  const btnBox = document.createElement("div");
  btnBox.classList.add("buttons");

  const moreBtn = document.createElement("button");
  moreBtn.textContent = "See More Details";
  moreBtn.classList.add("btn");
  moreBtn.addEventListener("click", () => {
    details.style.display =
      details.style.display === "block" ? "none" : "block";
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove Card";
  removeBtn.classList.add("btn");
  removeBtn.addEventListener("click", () => {
    card.remove();
  });

  btnBox.appendChild(moreBtn);
  btnBox.appendChild(removeBtn);

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(details);
  card.appendChild(btnBox);

  container.appendChild(card);
});
