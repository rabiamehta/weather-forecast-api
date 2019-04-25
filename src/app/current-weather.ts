export class CurrentWeather {
    constructor(public cityName: string,
        public currdate: string,
        public icon: string,
        public desc: string,
        public temp: string,
        public humidity: string,
        public min_temp: string,
        public max_temp: string,
        public wind: string) { }
}