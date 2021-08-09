import React from 'react';

export default class FetchRanfomUser extends React.Component {
    state = {
        person: null,
        loading: false
    }

    async componentDidMount() {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false});
        console.log(data.results[0]);
    }
    
    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        if (!this.state.person) {
            return <div>There is not person</div>
        }

        return(
            <>
                <img src={this.state.person.picture.large}/>
                <p>{this.state.person.name.title}</p>
                <p>{this.state.person.name.first}</p>
                <p>{this.state.person.name.last}</p>
            </>
        )
    }
};