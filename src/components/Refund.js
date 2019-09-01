import React from 'react';

import PropTypes from 'prop-types';
import Style from 'style-it';

export default class Refund extends React.Component {

    StyleItemBG() {
        return {
            border: '1px',
            borderRadius: '50%'
        }
    }

    StyleItem() {
        return {
            //  Ternary operator
            //  Evaluación en una sola línea (condicion ? accion cumple: accion no cumple).-
            color: (this.props.itemRefund.amount === '0') ?  'red': 'black',
            background: (this.props.itemRefund.day === 'Todos los días') ? 'yellow': 'gray'
        }
    }

    /*
    StyleCircularProgress () {
        var Prueba = 'linear-gradient(25deg,white 50%, blue 50%)';
        console.log(Prueba);

        return {
            width: '12rem',
            height: '12rem',
            background: 'linear-gradient({this.props.itemRefund.percent}deg,white 50%, blue 50%)',
            position: 'relative',
            borderRadius: '50%',
            display: 'inline-block',
            margin: '1rem 2rem 1rem 2rem'
        }
    }
    */
    
    render() {
        //  Configurar "item" para evitar tener que repetir.-
        //const {itemRefund} = this.props;

        const description = this.props.itemRefund.description;
        console.log(description);
        const percent = this.props.itemRefund.percent * 1.8;
        const colorBGdefault = "white";
        const colorFirstCircularProgress = "#FF7133";
        const colorSecondCircularProgress = "#FFB233";

        //  Devolver el DIV con los 4 campos.-
        return Style.it(`
            .StyleCircularProgress {
                width: 12rem;
                height: 12rem;
                background: linear-gradient(${percent}deg, ${colorFirstCircularProgress} 50%, ${colorSecondCircularProgress} 50%);
                position: relative;
                border-radius: 50%;
                display: inline-block;
                margin: 1rem 1rem 1rem 1rem;
            }
            .StyleCircularProgress::before {
                content: "before";
                width: 12rem;
                height: 12rem;
                position: absolute;
                top: 0rem;
                left: 0rem;
                background: ${colorBGdefault} context-box;
                border-radius: 50%;
                padding: 0.5rem;
                box-sizing: border-box;
                font-size: 2rem;
                color: black;
                text-align: center;
                line-height: 8rem;s
            }
            .StyleCircularProgress::after {
                content: "after";
                width: 12rem;
                height: 12rem;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 50%;
                background: linear-gradient(0deg, ${colorBGdefault} 50%, transparent 50%);
                text-align: center;
                color: red;
                line-height: 1rem;
            }
        `,
            <div className="StyleCircularProgress">
            </div>
        )
    }
}

//  Permite especificar el tipo de dato requerido en las props y validarlo (en este caso Objeto).-
Refund.propTypes = {
    itemRefund: PropTypes.object.isRequired
}

//export default Refund;