import React, {Component} from 'react';
import {Categories} from "../../Constans";
import Button from "../UI/Button/Button";
import './Editor.css';
import axiosQuote from "../../axios-quote";

class Editor extends Component {

    state = {
      category: '',
      author: '',
      text: ''
    };

    async componentDidMount() {
        const editing = await axiosQuote.get('quotes/' + this.props.match.params.id + '.json');
        if(editing.data){
            this.setState({category: editing.data.category, author: editing.data.author, text: editing.data.text});
        } else {
            alert('Something did wrong');
        }
    }

    changer = event => this.setState({[event.target.name]: event.target.value});

    editing = async event => {
        event.preventDefault();

        const quote = {
            category: this.state.category,
            author: this.state.author,
            text: this.state.text,
        };


        const putting = await axiosQuote.put('quotes/' + this.props.match.params.id + '.json', quote);

        if (putting.statusText === 'OK') {
            this.setState({author: '', text: '', category: ''});
            this.props.history.replace('/');
        } else {
            alert('Something did wrong');
        }
    };

    render() {
        return (
            <div className="card mb-3" style={{maxWidth: '900px', margin: '20px auto'}}>
                <div className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Edit Quote</h5>
                    <form onSubmit={event => this.editing(event)}>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                className="form-control"
                                id="category" name='category'
                                value={this.state.category}
                                onChange={event => this.changer(event)}>
                                <option></option>
                                {Categories.map(category => (
                                    <option key={category.id}>{category.title}</option>
                                ))}
                            </select>
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author" name='author'
                                value={this.state.author}
                                onChange={event => this.changer(event)}/>
                            <label htmlFor="text">Quote Text</label>
                            <textarea
                                className="form-control"
                                id="text" rows="3"
                                name='text'
                                value={this.state.text}
                                onChange={event => this.changer(event)}
                            />
                        </div>
                        <Button type='submit'>Edit</Button>
                    </form>
                    <p className="card-text"><small className="text-muted">Your editing quote will be displayed on main page</small></p>
                </div>
            </div>
        );
    }
}

export default Editor;