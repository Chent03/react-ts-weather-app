import * as React from "react";

import Search from '../containers/search_bar';
import WeatherList from "../containers/weather_list";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <WeatherList />
            </div>
        )
    }
}
