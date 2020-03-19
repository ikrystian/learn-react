import React from 'react';

class StepperComponent extends React.Component {
    state = {
        actualStep: 1
    };

    changeCurrent = (num) => {
        this.setState({actualStep: num});
    };

    render() {
        const steps = this.props.steps || 3;

        return (
            <>
                {Array.from(Array(steps)).map((step, steps_index) => {
                    let si = steps_index +1;
                    const className = (si === this.state.actualStep) ? 'active' : '';
                    return <button onClick={()=> this.changeCurrent(si)} className={'btn ' + className}  key={steps_index}>{si}</button>
                    }
                )}
            </>
        )
    }
}

export default StepperComponent;
