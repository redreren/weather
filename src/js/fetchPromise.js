const apiKey = "7488daa0f3aff18a87377e04006d11f6";

export default {
    _city: 'Kiev',

    fetchWeather () {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this._city}&units=metric&appid=${apiKey}`;
        return fetch(url)
            .then(response => response.json())
            // .then(data => {
            //     console.log(data);
            //     return data
            // })
    },
    get city() {
    return this._city;
    },
    set city(newCity) {
    return (this._city = newCity);
    },
}