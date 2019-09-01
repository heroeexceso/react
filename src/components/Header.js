import React from 'react';
import logo from '../images/logoHeader.gif';
import Style from 'style-it';

export default class Header extends React.Component {

    render() {
        const colorBGdefault = "white";
        const colorh2 = "black";
        const fontSizeh2 = "1rem";

        //  Devolver el DIV con los 4 campos.-
        return Style.it(`
            .StyleHeader {
                background-color: ${colorBGdefault}
            }
            .StyleH2 {
                text-align: left;
                color: ${colorh2};
                margin-left: 2rem;
                font-size: ${fontSizeh2};
            }
            `,
            <div id="encabezado" className="StyleHeader">
                <img src={logo} alt="Banco Hipotecario" width="174" height="83"></img>
                <h2 className="StyleH2">Consumos registrados en el mes actual</h2>
            </div>
        );
    }
}