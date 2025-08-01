/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


function freelanceObj() {
  const numName = Math.floor(Math.random() * NAMES.length);
  const numOcc = Math.floor(Math.random() * OCCUPATIONS.length);
  const ranPri = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
  const freelancer = {
    name: (NAMES[numName]),
    occupation: (OCCUPATIONS[numOcc]),
    price: ranPri,
  };
  return freelancer;
}

const freelancer = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
    freelancer.push(freelanceObj());
} 

function averageRate() {
    let sum = 0
    for (let i = 0; i < freelancer.length; i++) {
        sum += freelancer[i].price;
    }
    return sum / freelancer.length;
}

const initialAverageRate = averageRate();

function freelancerAbility(freelancer) {
    const $p = document.createElement("p");
    const $div = document.createElement("div");
    $p.textContent = `${freelancer.name} ${freelancer.occupation} $${freelancer.price}/hr`;
    $div.append($p);
    return $div;
}

function freelancerBoard(freelancerList) {
    const $section = document.createElement("section");
    for (let i = 0; i < freelancerList.length; i++) {
        const currentFreelancer = freelancerList[i];
        const freelancerElement = freelancerAbility(currentFreelancer)
        $section.append(freelancerElement);
    }
    return $section;
}

function freelancerAverage(averageRateValue) {
    const $article = document.createElement("article");
    const $h2 = document.createElement("h2");
    $h2.textContent = `The average rate is ${averageRateValue}`;
    $article.append($h2);
    return $article
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelance Forum</h1>
    <average></average> 
    <board></board> 
  `;
  const $averagePlaceholder = $app.querySelector("average");
  const $averageComponent = freelancerAverage(initialAverageRate);
  $averagePlaceholder.replaceWith($averageComponent);
  const $boardPlaceholder = $app.querySelector("board");
  const $boardComponent = freelancerBoard(freelancer);
  $boardPlaceholder.replaceWith($boardComponent);
}
render();