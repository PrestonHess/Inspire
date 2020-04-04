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
  getFahrenheit(){
    //NOTE Needs to convert kelvin to fahrenheit 
    let fahrenheit = 0
    // fahrenheit += ( ${this.kelvin} - 273.15 ) * 1.8 ) + 32;
    return fahrenheit
  }
}