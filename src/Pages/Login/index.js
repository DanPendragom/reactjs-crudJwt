import React, { Component } from 'react';
import './style.css';

export default class Login extends Component {
    
    state = {
        login: '',
        senha: ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const {
            login,
            senha,
        } = this.state;

        const logar = {
            login: login,
            senha: senha
        }

        console.log(logar);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h2>Bem vindo Usuario</h2>
                    <input 
                        onChange={this.handleInputChange} 
                        value={this.state.login}
                        name="login"
                        placeholder="Email"  
                    />

                    <input onChange={this.handleInputChange} 
                        value={this.state.senha} 
                        placeholder="Senha" 
                        name="senha"
                        type="password" 
                    />

                    <button type="submit">ENTRAR</button>
                </form>
            </div>
        );
    }
}



