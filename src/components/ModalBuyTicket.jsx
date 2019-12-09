import React from 'react'
import ReactDOM from "react-dom";

import { ModalContent } from './ModalContent';

export class ModalBuyTicket extends React.Component {

    root = document.createElement('div');
    body = document.querySelector('body')

    componentDidMount() {
        this.body.appendChild(this.root);
    }
    
    componentWillUnmount() {
        this.body.removeChild(this.root);
    }

    render() {
        const { session, handleCloseModal} = this.props;
        return (
            ReactDOM.createPortal(<ModalContent session={session} handleCloseModal={handleCloseModal} />, this.root)
        )
    }
}
