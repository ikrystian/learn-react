import React from 'react';

class AlertComponent extends React.Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        return (
            <>
                <button onClick={this.toggle}>asd</button>
                <h1>{ (this.state.isOpen) ? 'true' : 'false'}</h1>
            </>
        )
    }
}

export default AlertComponent;
