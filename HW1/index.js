const card = document.querySelector(".card");
const card_content = document.querySelector(".card_content");
const logo = document.querySelector(".logo_container");

card.addEventListener("mouseover", function () {
  card_content.style.display = "block";
});

card.addEventListener("mouseleave", function () {
    card_content.style.display = "none";
  });

logo.addEventListener("mouseover", function () {
  console.log("hover");
  logo.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
  logo.style.padding = "7%";
});

logo.addEventListener("mouseleave", function () {
    console.log("done");
    logo.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    logo.style.padding = "10%";
});

logo.addEventListener('click', function () {
    window.open("https://www.purdue.edu/");
});