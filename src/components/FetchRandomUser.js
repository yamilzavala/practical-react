import React from 'react';
import {v4 as uuidv4} from 'uuid';

export default class FetchUser extends React.Component {
    state = {
        persons: null,
        loading: false
    }

    async componentDidMount() {
        const url = 'https://api.randomuser.me/?results=5';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({persons: data.results, loading: false});
        console.log(data.results);
    }
    
    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        if (!this.state.persons) {
            return <div>There is not persons</div>
        }

        return(
            <>
             <div>
                {this.state.persons.map(person => (      
                    <div key={uuidv4()}>        
                        <img src={person.picture.large}/>
                        <p>{person.name.title}</p>
                        <p>{person.name.first}</p>
                        <p>{person.name.last}</p>                
                    </div>
                ))}                
             </div>
            </>
        )
    }
};