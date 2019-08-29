import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            greeting: "Hello",
            count: 0
        };
    }
    render() {
        
        return (
            <div>
                <h1>{this.state.greeting} {this.props.name}</h1>
                <button onClick={() => this.setState((prevState) =>({
                    count: prevState.count + 1
                }))} 
                className={this.state.count >= 10 ? "btn btn-danger" : "btn btn-primary"}>
                    Click me! 
                </button>
                
                <button onClick={() => this.setState((prevState) =>({
                    count: 0
                }))} className="btn btn-primary">Clear! 
                </button>

                <p>{this.state.count}</p>
            </div>
        );
    }
}

    
export default Counter; 