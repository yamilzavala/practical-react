import React from 'react';
import {v4 as uuidv4} from 'uuid';

//initial state
const initialState = {
    name: '',
    email: '',
    password: '',
    checkbox: false,
    select: 'item 1',
    nameError: '',
    emailError: '',
    passwordError: '',
}

const itemsSelect = ['item 1', 'item 2', 'item 3', 'item 4'];

export default class ValidationsForm extends React.Component {
        //state
        state = initialState;    

        //validate form fields
        validate = () => {
            let nameError = '';
            let emailError = '';
            let passwordError = '';
            if (!this.state.email.includes("@")) {
                emailError = 'Invalid email';                
            }
            if (!this.state.name) {
                nameError = 'No allow blank values in name';                
            }
            if (!this.state.password) {
                passwordError = 'No allow blank values in password';                
            }
            if (nameError || emailError || passwordError) {                
                this.setState({nameError, emailError, passwordError});               
                return false;
            }
            return true;
        }
          
        //submit
        handleSubmit = (e) => {
            e.preventDefault();
            if (this.validate()) {
                console.log(this.state);
                this.setState(initialState);                
            }
        }

        //controls-handle
        handleEvent = (e) => {
            const isCheckbox = e.target.type === 'checkbox';          
            console.log(e.target.value);
            this.setState({
                [e.target.name]: isCheckbox 
                ? e.target.checked 
                : e.target.value
            })            
        }    
        
    render() {
        
        return(
            <>
                <form onSubmit={this.handleSubmit} noValidate>                    
                    <input
                    value={this.state.name} 
                    placeholder="name" 
                    type="text" 
                    name="name" 
                    onChange={this.handleEvent}/>
                    {this.state.nameError ? <div>{this.state.nameError}</div> : null}
                    <br/>

                    <input
                    value={this.state.email} 
                    placeholder="email" 
                    type="email" 
                    name="email" 
                    onChange={this.handleEvent}/>
                    {this.state.emailError ? <div>{this.state.emailError}</div> : null}
                    <br/>

                    <input
                    value={this.state.password} 
                    placeholder="password" 
                    type="password" 
                    name="password" 
                    onChange={this.handleEvent}/>
                    {this.state.passwordError ? <div>{this.state.passwordError}</div> : null}
                    <br/>

                    <input 
                    name="checkbox"
                    value={this.state.checkbox}
                    checked={this.state.checkbox}
                    type="checkbox" 
                    onChange={this.handleEvent}/>
                    <br/>

                    <select 
                    name="select" 
                    value={this.state.select}
                    onChange={this.handleEvent}>
                        {itemsSelect.map((item) =>                             
                            <option key={uuidv4()}>{item}</option>
                        )}                       
                    </select>
                    <br/>

                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}