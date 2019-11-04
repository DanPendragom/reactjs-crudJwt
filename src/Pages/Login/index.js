import React, { Component }from 'react';
import './style.css';

export default class Login extends Component{
    render(){
        return(
            <div className="container">
                <form>
                    <h2>Bem vindo Usuario</h2>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Senha" type="password"/>
                    <button>ENTRAR</button>
                </form>
            </div>
        );
    }
}



