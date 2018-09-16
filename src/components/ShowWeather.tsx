import * as React from 'react';

const icon = 'http://openweathermap.org/img/w/';

interface WeatherProps {
    city?: string;
    country?: string;
    description?: string;
    icon?: string;
    temp?: number;
    humidity?: number;
}

interface State {}

class ShowWeather extends React.Component<WeatherProps, State> {
    constructor(props: WeatherProps) {
        super(props);   
    }
    public render() {
        return(
            <div className='weatherinfo'>
                { this.props.city && <h3>Current Weather in {this.props.city}, {this.props.country} </h3>}
                { this.props.icon&& <img src={`${icon}${this.props.icon}.png`}/>}
                { this.props.description && <p><b>Condition: { this.props.description }</b></p>}
                { this.props.temp && <p><b>Temperature: { this.props.temp } °C</b></p>}
                { this.props.humidity && <p><b>Humidity: { this.props.humidity }</b></p>}
            </div>
            
        );
    }
}

export default ShowWeather;