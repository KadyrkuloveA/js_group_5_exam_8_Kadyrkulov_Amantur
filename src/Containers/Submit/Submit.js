import React, {Component} from 'react';
import './Submit.css';
import Button from "../../Components/UI/Button/Button";
import axiosQuote from "../../axios-quote";

class Submit extends Component {
    state = {
      author: '',
      text: '',
      category: ''
    };

    changer = event => this.setState({[event.target.name]: event.target.value});

    submitQuote = async event => {
        event.preventDefault();

        const quote = {
            category: this.state.category,
            author: this.state.author,
            text: this.state.text,
        };

        await axiosQuote.post('/quotes.json', quote);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="card mb-3" style={{'max-width': '900px', 'margin': '10px auto'}}>
                <div className="row no-gutters">
                    <div className="col-md-4 img-block"/>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Submit Your Quote</h5>
                            <form onSubmit={event => this.submitQuote()}>
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <select
                                        className="form-control"
                                        id="category" name='category'
                                        value={this.state.category}
                                        onChange={(event) => this.changer(event)}>
                                        <option>Star Wars</option>
                                        <option>Famous people</option>
                                        <option>Saying</option>
                                        <option>Humour</option>
                                        <option>Motivational</option>
                                    </select>
                                    <label htmlFor="author">Author</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author" name='author'
                                        value={this.state.author}
                                        onChange={(event) => this.changer(event)}/>
                                    <label htmlFor="text">Quote Text</label>
                                    <textarea
                                        className="form-control"
                                        id="text" rows="3"
                                        name='text'
                                        value={this.state.text}
                                        onChange={(event) => this.changer(event)}
                                    />
                                </div>
                                <Button type='submit'>Submit</Button>
                            </form>
                            <p className="card-text"><small className="text-muted">Your quote will be displayed on the main page</small></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Submit;