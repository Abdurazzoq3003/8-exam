const url = "https://673841334eb22e24fca75190.mockapi.io/api/v1";

const input = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");

const button = document.querySelector("button");

const createHouse = async () => {
  const inputValue = input.value;
  const inputValue2 = input2.value;
  const inputValue3 = input3.value;
  const inputValue4 = input4.value;
  const response = await fetch(url + "/cars  ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputValue,
      image: inputValue2,
      model: inputValue3,
      description: inputValue4,
    }),
  });
  const data = await response.json();

  console.log(data);
};

button.addEventListener("click", () => {
  createHouse();
  input.value = "";
  alert("Malumotlaringiz Saqlandi!!");
});
