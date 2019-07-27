'use strict'

window.addEventListener('load', () => {


    //Por clases
    // var divs = document.getElementsByClassName('container').innerHTML;
    //Por Id
    //var divs2 = document.getElementById('div_uno').innerHTML;
    //Por tag
    //var divs = document.getElementsByTagName('span')[0].innerHTML;
    //Por name
    //var name = document.getElementsByName('hola');
    //Query Selector por clase
    // var queryselector = document.querySelector('.tres_clase').innerHTML;
    //Query Selector por id
    //var queryselector = document.querySelector('#tres').innerHTML;


    var buton = document.querySelector('#boton');
    var caja = document.querySelector('#texto');

    buton.addEventListener('click', () => {
        let div_uno = document.querySelector('#div_uno').style.backgroundColor = 'red';
    });

    buton.addEventListener('mouseover', () => {
        let div_uno = document.querySelector('#div_uno').style.backgroundColor = 'green';
    });

    buton.addEventListener('mouseout', () => {
        let div_uno = document.querySelector('#div_uno').style.backgroundColor = 'yellow';
    });

    buton.addEventListener('dblclick', () => {
        let div_uno = document.querySelector('#div_uno').style.backgroundColor = 'grey';
    });


    /*
        caja.addEventListener('keypress', (datos) => {
            console.log(datos);
           
        });
    */
    /*

    caja.addEventListener('keyup', (datos) => {
        console.log(datos);

    });
   */

    /*
        caja.addEventListener('keydown', (datos) => {
            console.log(datos);

        });

    */







});