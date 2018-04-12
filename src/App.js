import React, {Component} from 'react';
import Form from "./Form";
import './App.css';
import Factory from "./Factory";
import Title from "./Title";


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.updateState = this.updateState.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    updateState(arg) {
        this.setState({
            data: [...this.state.data, arg]
        })
    }

    handleDelete(number) {
        let temp = this.state.data;
        temp.splice(number, 1);
        this.setState({
            data: temp
        });
    }


    render() {
        return (
            <div className="App">

                <Title/>

                <Form update={this.updateState}
                />


                {this.state.data.map((element, index) => {
                    return (
                        <Factory key={index} index={index} name={element.name} desc={element.desc} date={element.date}
                                 deleter={this.handleDelete}
                        />
                    )
                })}
            </div>
        );
    }
}

export default App;
