import React from 'react'

export default class Counter extends React.Component {   

    render() {
        return(
            <>
                <div>    
                    <button onClick={this.props.increment}>Increment</button>  
                    {this.props.count}
                    <button onClick={this.props.decrement}>Decrement</button>
                    <br/>
                </div>
            </>
        )
    }
}