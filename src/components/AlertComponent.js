import React from 'react';

class AlertComponent extends React.Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {

        const { children, title } = this.props;
        return (
            <>
                <button className={title || 'title'} onClick={this.toggle}>Click to show element</button>
                {(this.state.isOpen) ? children : null}
            </>
        )
    }
}

export default AlertComponent;
