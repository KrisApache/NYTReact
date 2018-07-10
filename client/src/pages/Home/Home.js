import React, { Component } from 'react';
import API from './../../utils/API';
import Article from './../../components/Article';
import Search from './../../components/Search';

class Home extends Component {
    state = {
        articles: [],
        savedArticles: [],
        q: "",
        start_year: "",
        end_year: "",
    }

    componentDidMount() {
        this.getArticles();
        this.getSavedArticles();
    }

    getArticles = () => {
        API.getArticles({
            q: this.state.q,
            start_year: this.state.start_year,
            end_year: this.state.end_year
        })
            .then(res =>
                this.setState({
                    articles: res.data,
                })
            )
            .catch(err => console.log(err));
    }

    getSavedArticles = () => {
        API.getSavedArticles()
            .then(res => 
                this.setState({
                    savedArticles: res.data
                })                
            )
            .catch(err => console.log(err));
    }

    handleArticleSave = (id) => {
        const article = this.state.articles.find(article => article._id === id);
        API.saveArticle(article)
            .then(res => {
                this.getArticles();
                this.getSavedArticles();
            });
    }

    handleDelete = (id) => {
        const article = this.state.savedArticles.find(article => article._id === id);
        API.deleteArticle(article._id)
            .then(res => {
                this.getArticles();
                this.getSavedArticles();
            });
    }

    handleSearch = event => {
        event.preventDefault();
        this.getArticles();
        this.getSavedArticles();
        // this.setState({ start_year: "", end_year: "", q: "" });
    };

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <br />

                <div class="container">
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <div className="card cyan darken-2" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                                <div className="card-content white-text">
                                    <span className="card-title center">Search Articles</span>
                                </div>
                                {/* <Search /> */}
                                <input placeholder="Topic" id="topic" type="text" class="validate"
                                    name="q"
                                    value={this.state.q}
                                    onChange={this.handleInputChange} />
                                <label for="topic">Topic</label>
                                <input placeholder="Start Year" id="start_date" type="text" class="validate"
                                    name="start_year"
                                    value={this.state.start_year}
                                    onChange={this.handleInputChange} />
                                <label for="start_year">Start Year</label>
                                <input placeholder="End Year" id="end_date" type="text" class="validate"
                                    name="end_year"
                                    value={this.state.end_year}
                                    onChange={this.handleInputChange} />
                                <label for="end_year">End Year</label>

                                <div className="card-action center">
                                    <button className="btn waves-effect waves-light  light-blue darken-1" type="submit" name="action"
                                        onClick={this.handleSearch}>
                                        <i className="material-icons">search</i>
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col s12">
                            <div className="card cyan darken-2">
                                <div className="card-content white-text">
                                    <span className="card-title center">Results</span>
                                    <div class="collection">
                                        {this.state.articles.map(article => (
                                            <Article
                                                key={article._id}
                                                _id={article._id}
                                                title={article.headline.main}
                                                url={article.web_url}
                                                date={article.pub_date}
                                                handleClick={this.handleArticleSave}
                                                buttonText="Save "
                                                icon="note_add"
                                            />

                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col s12 ">
                            <div className="card cyan darken-2">
                                <div className="card-content white-text">
                                    <span className="card-title center">Saved Articles</span>
                                    <div class="collection">
                                        {this.state.savedArticles.map(article => (
                                            <Article
                                                key={article._id}
                                                _id={article._id}
                                                title={article.title}
                                                url={article.url}
                                                date={article.pub_date}
                                                handleClick={this.handleDelete}
                                                buttonText=""
                                                icon="delete_sweep"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;