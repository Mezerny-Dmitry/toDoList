import React, {Component} from 'react';
import "./Factory.css";



class Factory extends Component {

    constructor(props){
        super(props);

    this.onClick =this.onClick.bind(this);

    }


    onClick(){
        this.props.deleter(this.props.index);

    }


    render() {
        return (<div>

                <div className="plan" >
                    <p className="plan1">{this.props.name}</p>
                    <p className="plan2">{this.props.desc}</p>
                    <p className="plan3">{this.props.date}</p>
                    <button onClick={this.onClick}>Done</button>

                </div>
            </div>
        );

    }
}

export default Factory;
