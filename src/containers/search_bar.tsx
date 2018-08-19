import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'


interface State {
    term: string
}

interface Props {
    fetchWeather: any
}
class SearchBar extends React.Component<Props, State> {
    constructor(props:any) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event: React.SyntheticEvent) {
        let input = event.target as HTMLInputElement
        this.setState({term: input.value})
    }

    onFormSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        // we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Get a five day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)