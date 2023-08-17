const apiKey = '4GiSOq8N7LYArpPEG2yBUg2NxDtgTmOHR78hDhUC';
const apiUrl = `https://countryapi.io/api/all?apikey=${apiKey}`;
const urlParams = {
    limit: 10,
    skip: 0
};

let allCountriesContainer = document.getElementById("all-countries")
let europeCountriesContainer = document.getElementById("europe-countries")
let asiaCountriesContainer = document.getElementById("asia-countries")
let africaCountriesContainer = document.getElementById("africa-countries")
let americasCountriesContainer = document.getElementById("americas-countries")
let antarcticCountriesContainer = document.getElementById("antarctic-countries")
let oceaniaCountriesContainer = document.getElementById("oceania-countries")

function getCountry() {
    const url = new URL(apiUrl);
    url.searchParams.set('limit', urlParams.limit);
    url.searchParams.set('skip', urlParams.skip);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const countryList = Object.values(data);
            countryList.forEach((country) => {
                language = Object.values(country.languages);
                currencyArray = Object.values(country.currencies);
                currency = Object.values(currencyArray[0]);
                allCountriesContainer.innerHTML += createCountry(country);
            });
            countryList.forEach((country) => {
                let region = country.region;
                language = Object.values(country.languages);
                currencyArray = Object.values(country.currencies);
                currency = Object.values(currencyArray[0]);
                switch (region) {
                    case 'Europe':
                        europeCountriesContainer.innerHTML += createCountry(country);
                        break;
                    case 'Asia':
                        asiaCountriesContainer.innerHTML += createCountry(country);
                        break;
                    case 'Africa':
                        africaCountriesContainer.innerHTML += createCountry(country);
                        break;
                    case 'Americas':
                        americasCountriesContainer.innerHTML += createCountry(country);
                        break;
                    case 'Antarctic':
                        antarcticCountriesContainer.innerHTML += createCountry(country);
                        break;
                    case 'Oceania':
                        oceaniaCountriesContainer.innerHTML += createCountry(country);
                        break;
                    default:
                        console.log("this does not work");          
                }
            });
        });
};
getCountry();

function createCountry(data) {
    return `
    <div class="country">
                    <div class="main">
                        <div class="top">
                            <div class="next">
                            <h3>${data.alpha3Code}</h3>
                            </div>
                            <div class="middle">
                                <img src="${data.flag.medium}">
                            </div>
                            <div class="next">
                            <h3>${data.callingCode}</h3>
                            </div>
                            </div>
                            <div class="bottom">
                                <h3>${data.name}</h3>
                            </div>
                            <div class="horizontal-line"></div>
                            <div class="middle">
                            <h4>${data.region}</h4>
                            <p>${data.altSpellings[2]}</p>
                            <div class="text">
                                <h4>Capital :</h4>
                                <h4>${data.capital}</h4>
                            </div>
                            <div class="text">
                                <h4>Language :</h4>
                                <h4>${language[0]}</h4>
                            </div>
                            <div class="text">
                                <h4>Currency :</h4>
                                <h4>${currency[1]}</h4>
                            </div>
                            <div class="text">
                                <h4>Area :</h4>
                                <h4>${data.area} km</h4>
                            </div>
                            <div class="text">
                                <h4>Population :</h4>
                                <h4>${data.population}</h4>
                            </div>
                        </div>
                    </div>
                </div>
    `
}

let regionButton = document.querySelector('.regionbtn');
let buttonArrow = document.getElementById('btn-arrow');
let dropDownMenu = document.getElementById('dropdown-menu');


regionButton.addEventListener('click', () => {
    if (dropDownMenu.style.display == "none") {
        buttonArrow.style.transform = "rotate(90deg)";
        dropDownMenu.style.display = "block";
    }
    else {
        buttonArrow.style.transform = "rotate(270deg)";
        dropDownMenu.style.display = "none";
    }
});

function resetDisplay() {
    allCountriesContainer.style.display = "none";
    europeCountriesContainer.style.display = "none";
    asiaCountriesContainer.style.display = "none";
    africaCountriesContainer.style.display = "none";
    americasCountriesContainer.style.display = "none";
    antarcticCountriesContainer.style.display = "none";
    oceaniaCountriesContainer.style.display = "none";
}
function resetColor() {
    allButton.style.color = 'black';
    europeButton.style.color = 'black';
    asiaButton.style.color = 'black';
    africaButton.style.color = 'black';
    americasButton.style.color = 'black';
    antarcticButton.style.color = 'black';
    oceaniaButton.style.color = 'black';
}

let allButton = document.getElementById('all-btn');
let europeButton = document.getElementById('europe-btn');
let asiaButton = document.getElementById('asia-btn');
let africaButton = document.getElementById('africa-btn');
let americasButton = document.getElementById('americas-btn');
let antarcticButton = document.getElementById('antarctic-btn');
let oceaniaButton = document.getElementById('oceania-btn');
let button = document.getElementById('button');

allButton.addEventListener('click', () => {
    resetDisplay();
    allCountriesContainer.style.display = 'grid';
    resetColor();
    allButton.style.color = 'rgb(62, 62, 153)';
    button.textContent = 'All';
})
europeButton.addEventListener('click', () => {
    resetDisplay();
    europeCountriesContainer.style.display = 'grid';
    resetColor();
    europeButton.style.color = 'rgb(62, 62, 153)';
    button.textContent = 'Europe';
})
asiaButton.addEventListener('click', () => {
    resetDisplay();
    asiaCountriesContainer.style.display = 'grid';
    resetColor();
    asiaButton.style.color = 'rgb(62, 62, 153)';
    button.textContent = 'Asia';
})
africaButton.addEventListener('click', () => {
    resetDisplay();
    africaCountriesContainer.style.display = 'grid';
    resetColor();
    africaButton.style.color = 'rgb(62, 62, 153)';
    button.textContent = 'Africa';
})
americasButton.addEventListener('click', () => {
    resetDisplay();
    americasCountriesContainer.style.display = 'grid';
    resetColor();
    americasButton.style.color = 'rgb(62, 62, 153)';
    button.textContent = 'Americas';
})
antarcticButton.addEventListener('click', () => {
    resetDisplay();
    antarcticCountriesContainer.style.display = 'grid';
    resetColor();
    antarcticButton.style.color = 'rgb(62, 62, 153)';
    button.textContent = 'Antarctic';
})
oceaniaButton.addEventListener('click', () => {
    resetDisplay();
    oceaniaCountriesContainer.style.display = 'grid';
    resetColor();
    oceaniaButton.style.color = 'rgb(62, 62, 153)';
    button.textContent = 'Oceania';
})

let headerDropdownMenu = document.getElementById('drpdwnmenu');
let headerDropdownBtn = document.getElementById('drpdwnbtn');

headerDropdownBtn.addEventListener('click', () => {
    if(headerDropdownMenu.style.display == 'none') {
        headerDropdownMenu.style.display = 'flex';
    }
    else {
        headerDropdownMenu.style.display = 'none';
    }
})