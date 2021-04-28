// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
import App from './components/App'

/* const name = "Angela"
const element = React.createElement('h1', {}, `Hola! Soy ${name}`);
//const jsx = <h1>Hello, Platzi Hola</h1>;

const container = document.getElementById('app'); */
/* const element = (
    <div>
        <h1>Hola, soy Richard</h1>
        <p>Soy ing</p>
    </div>
); */
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);


    /* firstName="Jonathan" 
    lastName="Rugama"
    avatarUrl="https://scontent.ffon1-1.fna.fbcdn.net/v/t1.0-9/68506100_2578279262229598_1500559022288273408_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=irfrPQv5nVAAX9azv_a&_nc_ht=scontent.ffon1-1.fna&oh=d745b78173b0cdd7f4118451a084f9ed&oe=606A92E4" 
    jobTitle="Frontend Engineer"
    twitter="@jonathan-rugama" */