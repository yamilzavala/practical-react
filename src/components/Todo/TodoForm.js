import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
    state = {
        text: ''
    }

    handeSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo({
            text: this.state.text,
            id: shortid.generate(),
            complete: false
        })
        this.setState({text: ''});
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
    }
    
    render() {
        return(
            <>
               <form onSubmit={this.handeSubmit}>
                    <input 
                    placeholder="todo..."
                    value={this.state.text} 
                    type="text"
                    onChange={this.handleChange}/>
                    <button type="submit">Add todo</button>   
               </form>        
            </>
        )
    }

}
