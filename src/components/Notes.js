import React, { Component } from 'react';
import './Notes.scss';

class Notes extends Component {
    render() {
        return (
        <div className="Notes">
            <CreateNote onCreate={this.props.onCreate}/>
            {this.props.notes.map((text, index) => {
            if(text !==""){
                return <Note text={text} 
                             key={index} 
                             onDelete={() => this.props.onDelete(index)}/>
            }
            })}
        </div>
        )
    }
}

class Note extends Component {
    render() {
        const text = this.props.text.length > 100 ? this.props.text.replace(/(.{100})(.)/g,'$1\n$2') : this.props.text;
        const rows = text.split('\n').length;
        return (
        <div className="Notes__note">
            <span className="Notes__note_delete" 
                  onClick={this.props.onDelete}>
                  &times;
            </span>
            <textarea readOnly className="Notes__note_textarea" 
                      value={text} 
                      rows={rows}></textarea>
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
        <div className='Notes__create_buttons'>
          <button  className="Notes__create_buttonSave" 
                   onClick={this.onSave}
                   >Зберегти</button>
          <button  className="Notes__create_buttonReset" 
                   onClick={this.onReset}
                   >Скинути</button>
        </div>
         </div>
        )
    }
}

export default Notes;