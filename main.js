const url = "https://673841334eb22e24fca75190.mockapi.io/api/v1";

const cardParent = document.querySelector(".card-parent");
const get = async () => {
  const response = await fetch(url + "/cars");
  const data = await response.json();
  console.log(data);

  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img
        src=${element.image}
        alt=""
        width="200px"
    />

    <h3>${element.name}</h3>
    <h4>F90</h4>
    <p>
        Lorem, ipsum dolor sit amet consectetur <br />
        adipisicing elit. Nisi <br />
        error quod aut delectus dicta,<br />
        tempore voluptatibus <br />
        exercitationem ullam <br />
        sapiente nobis!
    </p>
    `;
    cardParent.appendChild(card);
  });
};
get();
