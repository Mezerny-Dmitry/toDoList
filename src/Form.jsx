import React, {Component} from 'react';
import "./Form.css";


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', desc: '', date: '', item: {}};

        this.onInputChange = this.onInputChange.bind(this);
        this.onDescChange = this.onDescChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.Updater = this.Updater.bind(this);
        this.Cleaner = this.Cleaner.bind(this);
    }

    onInputChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
        console.log(name + ": " + event.target.value);
    }

    onDescChange(event) {
        this.setState({desc: event.target.value});
        console.log("desc: " + event.target.value);                                                                                                                                                                                                                         
    }


    Updater() {
        this.props.update(this.state.item);
    }

    Cleaner() {
        this.setState({
            name: '', desc: '', date: ''

        })
    }


    onSubmit(event) {
        event.preventDefault();

        if (this.state.name !== '' && this.state.desc !== '' && this.state.date !== '') {

            this.setState({
                item: {
                    name: this.state.name,
                    desc: this.state.desc,
                    date: this.state.date
                }
            });

            setTimeout(this.Updater, 50);
            setTimeout(this.Cleaner, 51)
        } else {
            alert("Fill in all the fields");
        }

    }


    render() {
        return (
            <form>
                <input onChange={this.onInputChange} pattern="^[A-zА-яЁё]+$" placeholder="Name" name="name"
                       type="text"
                       value={this.state.name} className="business"/>

                <textarea value={this.state.desc} onChange={this.onDescChange}
                          placeholder="Description" className="desc"></textarea>

                <label>DeadLine:<br/><input onChange={this.onInputChange} value={this.state.date} type="date"
                                            name="date" className="date"/></label>
                <input onClick={this.onSubmit} type="submit"/>
            </form>

        );
    }
}

export default Form;