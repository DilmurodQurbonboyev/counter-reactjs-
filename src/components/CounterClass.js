import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)

        this.state = {
            counter: 0
        }
    }

    decrease() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    increase() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div className="d-flex">
                <button className="btn btn-danger" onClick={this.decrease}>-</button>
                <h5 className="m-2">{this.state.counter}</h5>
                <button className="btn btn-primary" onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default CounterClass;
