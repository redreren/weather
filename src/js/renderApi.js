import refs from "./refs.js";
import fetchPromise from "./fetchPromise.js";
import moment from "moment";
import momentHandlebars from "handlebars.moment";
import momentHelper from "handlebars-helper-moment";
import template from "../template/item.hbs";
// import fetchAsync from "./fetchAsync.js";
moment().format();

fetchPromise.fetchWeather()

refs.form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.city.value);
    fetchPromise.city = e.currentTarget.city.value;
    fetchPromise.fetchWeather()
        .then(data => renderWeather({ data }));
    
    refs.input.value = '';
    refs.daysList.innerHTML = '';
})

function renderWeather(data) {
    const items = template(data);
    refs.daysList.insertAdjacentHTML('beforeend', items)
}