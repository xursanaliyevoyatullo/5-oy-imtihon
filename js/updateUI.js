const cards = document.querySelector('.cards')
const countryCards = document.querySelector('.country-cards')


function updateUI(data) {
    const davlatlar = data.slice(0,250);
    const template = document.createDocumentFragment();
    cards.innerHTML = "";
    davlatlar.forEach((country) => {
        const li = createElement('li', "cards__item");
        const a = createElement('a');
        a.setAttribute('href', `./about.html?country-name=${country.name.common}`);
        const img = createElement('img');
        const h3 = createElement('h3', 'cards__title');
        const population = createElement('p', 'population');
        const region = createElement('p', 'region');
        const capital = createElement('p', 'capital');
        img.src = `${country.flags.png}`;
        img.setAttribute('height', '160');
        h3.innerHTML = `${country.name.common}`;
        population.innerHTML = `Population: <span>${country.population}</span>`;
        region.innerHTML = `Region: <span>${country.region}</span>`;
        capital.innerHTML = `Capital: <span>${country.capital}</span>`;
        a.append(img, h3, population, region, capital);
        template.appendChild(a);
        li.appendChild(template);
        cards.appendChild(li)
    });
}


function updateAboutUI (data) {
    console.log(data);
    countryCards.innerHTML = ""
    countryCards.innerHTML = `

    <div class="country-info">
    <img class="country-info__img" src="${data.flags.png}" alt="germany-flag" width="560" height="400">
    <div class="country-info__content">
        <h2>${data.name.common}</h2>
        <ul class="country-info__list">
            <li class="country-info__item">
                <p class="name">Native Name <span>${data.name.nativeName}</span></p>
                <p class="population">Population: <span>${data.population}</span></p>
                <p class="region">Region: <span>${data.region}</span></p>
                <p class="sub-region">Sub Region: <span>${data.subregion}</span></p>
                <p class="capital">Capital: <span>${data.capital}</span></p>
            </li>
            <li class="country-info__item">
                <p class="name">Top Level Domain: <span>${data.cioc}</span></p>
                <p class="population">Currencies: <span>${data.currencies}</span></p>
                <p class="region">Languages: <span>${data.languages}</span></p>
            </li>
        </ul>
        
        <div class="country-info__borders">
            <h3>Border Countries: </h3>
            <a href="#">${data.border}</a>
            <a href="#">${data.border}</a>
            <a href="#">${data.border}</a>
            <a href="#">${data.border}</a>
            <a href="#">${data.border}</a>
            <a href="#">${data.border}</a>
            <a href="#">${data.border}</a>
            <a href="#">${data.border}</a>
            <a href="#">${data.border}</a>
        </div>
    </div>
</div>
    `
}

function createElement (elementName, className) {
    const element = document.createElement(elementName)
    className && element.classList.add(className)
    return element
}
 


export {updateUI, updateAboutUI}