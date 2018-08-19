import * as React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

interface Props {
    weather: []
}

class WeatherList extends React.Component<Props> {

    renderWeather(cityData: any) {
        const name = cityData.city.name
        const temps = cityData.list.map((weather:any) => weather.main.temp)
        const pressure = cityData.list.map((weather: any) => weather.main.pressure)
        const humidty = cityData.list.map((weather: any) => weather.main.humidity)

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color={"red"} units="K" /></td>
                <td><Chart data={pressure} color={"blue"} units="hPa" /></td>
                <td><Chart data={humidty} color={"green"} units="%" /></td>
                
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state: any) {
    return { weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList)