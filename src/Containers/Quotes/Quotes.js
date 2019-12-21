import React, {Component, Fragment} from 'react';
import './Quotes.css';
import axiosQuote from "../../axios-quote";
import Quote from "../../Components/Quote/Quote";
import {NavLink} from "react-router-dom";
import {Categories} from "../../Constans";

class Quotes extends Component {

    state = {
        quotes: {},
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.request();
        }
    }

    async componentDidMount() {
        console.log(this.props.match.params.category);
        this.request();
    }

    request = async () => {
        let url = '/quotes.json';
        console.log(this.props.match.params.category);
        if (this.props.match.params.category) {
            url += `?orderBy="category"&equalTo="${this.props.match.params.category}"`
        }

        const response = await axiosQuote.get(url);
        console.log(response);
        this.setState({quotes: response.data});
    };

    delQuote = async (id) => {
        const removable = await axiosQuote.delete('/quotes/' + id + '.json');
        if (removable.statusText === 'OK') {
            return this.componentDidMount();
        } else {
            alert('Your message hasn\'t been deleted');
        }
    };

    editQuote = async (id) => {
        this.props.history.push('/quotes/' + id + '/edit');
    };

    render() {
        return (
            <Fragment>
                <div className="list">
                    {Categories.map(category => (
                        <div key={category.id} className="item"><NavLink to={'/quotes/' + category.title} >{category.title}</NavLink></div>
                    ))}
                </div>
                <div className='container'>
                    {this.state.quotes ? Object.keys(this.state.quotes).map((key) => (
                        <Quote
                            key={key}
                            text={this.state.quotes[key].text}
                            author={this.state.quotes[key].author}
                            delQuote={() => this.delQuote(key)}
                            editQuote={() => this.editQuote(key)}
                        />
                    )) : <h2 style={{marginTop: '30px'}}>Now Quotes Empty</h2>}
                </div>
            </Fragment>
        );
    }
}

export default Quotes;