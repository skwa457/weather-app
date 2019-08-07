import * as React from "react";
import ShowWeather from "./ShowWeather";
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/App.css';

const API_KEY = ''

interface Props {}

interface WeatherState {
    city?: string;
    country?: string;
    description?: string;
    icon?: string;
    temp?: number;
    humidity?: number;
    error: '';
    loading: boolean;
}

class Weather extends React.Component<Props, WeatherState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            city: undefined,
            country: undefined,
            description: undefined,
            icon: undefined,
            temp: undefined,
            humidity: undefined,
            error: '',
            loading: false
        };
        this.getCurrentWeather = this.getCurrentWeather.bind(this);
    }

    getCurrentWeather(event: any) {
        event.preventDefault();
        if (this.state.city === undefined) {
            this.setState({
                loading: false
            })
        }    
        else {
            this.setState({
                loading: true
            })
        }
        const city_name = event.target.elements.city.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    city: data.name,
                    country: data.sys.country, 
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    temp: Math.round(data.main.temp - 273.15),
                    humidity: data.main.humidity,
                    loading: false
                });
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    loading: false
                })
            });
    }

    public render() {
        const loading = this.state.loading && <CircularProgress/>;
        return(
            <div>
                <form onSubmit={this.getCurrentWeather}>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="submit" value="Get Weather"/>
                </form>
                <div>
                <p>{loading}</p>
                <ShowWeather
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    icon={this.state.icon}
                    temp={this.state.temp}
                    humidity={this.state.humidity}/>
                </div>
            </div>
        )
    }
}
    
export default Weather;
