
export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.description = data.weather
    this.kelvin = data.main.temp
  }

  get Template() {
    return /*html*/ `
    <div class="bg-clear">
      <div>
        <h5>Today's Weather</h5>
        <h6 class="text-muted">${this.description[0].description}</p>
          <span><img id="weather-icon" src="http://openweathermap.org/img/wn/${this.description[0].icon}@2x.png" class="img-fluid"/></span>
        <h3> ${this.kelvin} </h3>
      </div>
    </div>
    `
  }
  get Fahrenheit(){
    let celsius = this.kelvin - 273;
    // fahrenheit += ( ${this.kelvin} - 273.15 ) * 1.8 ) + 32;
    let fahrenheit = Math.floor(celsius * (9/5) + 32);
    return fahrenheit;
  }
}