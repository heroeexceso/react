import React from 'react';

import RefundComponent from "./Refund"
import PropTypes from 'prop-types';

export default class Refunds extends React.Component {
    render() {
        //  Recorrer el array y por cada item invocar al componente "Refund".-
        return this.props.arrayRefunds.map(itemRefund => <RefundComponent itemRefund={itemRefund} key={itemRefund.id} />);
        //return this.props.arrayRefunds.map(itemRefund => <RefundComponent itemRefund={[]} key={itemRefund.id} />);

    }
}

//  Permite especificar el tipo de dato requerido en las props y validarlo (en este caso Array).-
Refunds.propTypes = {
    arrayRefunds: PropTypes.array.isRequired
}
