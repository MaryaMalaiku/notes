import React, { Component } from 'react';
import './Notes.scss';

class Notes extends Component {
    render() {
        return (
        <div className="Notes">
            <CreateNote onCreate={this.props.onCreate}/>
            {this.props.notes.map((text, index) => {
                return <Note text={text} 
                             key={index} 
                             onDelete={() => this.props.onDelete(index)}/>
            })}
        </div>
        )
    }
}

class Note extends Component {
    render() {
        return (
        <div className="Notes__note">
            <span className="Notes__note_delete" 
                  onClick={this.props.onDelete}>
                  &times;
            </span>
            {this.props.text}
        </div>
        )
    }
}

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    } 

    onTextChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    onReset = () => {
        this.setState({
            text: ""
        });
    };

    onSave = () => {
        this.props.onCreate(this.state.text);
        this.onReset();
    };


    render() {
        return (
        <div className="Notes__сreate">
          <textarea className="Notes__сreate_input" 
                    placeholder="Напишіть..."
                    value={this.state.text} 
                    onChange={this.onTextChange}/>
          <button  className="Notes__create_buttonSave" 
                   onClick={this.onSave}
                   >Зберехти</button>
          <button  className="Notes__create_buttonReset" 
                   onClick={this.onReset}
                   >-</button>
         </div>
        )
    }
}

export default Notes;