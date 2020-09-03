import React from 'react';
import Movies from '../../components/Movies';
import MoviesCounter from '../../components/MoviesCounter';
import Sort from '../../components/Sort';

class MainContainer extends React.Component {
    constructor(props){
        debugger;
        super(props);
        this.state = { movies: []};
    this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount(){
        this.setState({
            movies: [{
            title: "firstTitle",
            genres: ["genre 1", "genre 2"],
            year: 2010,
            id: 1
        }, {
            genres: ["any genre"],
            year: 2004,
            imageUrl: "https://i.pinimg.com/originals/f6/e9/6e/f6e96e7bcf7aee8f5619f215dc02f3f5.jpg",
            id: 2
        }, {
            genres: ["any genre", "asdasdasd", "asdasd"],
            imageUrl: "https://i.pinimg.com/originals/f6/e9/6e/f6e96e7bcf7aee8f5619f215dc02f3f5.jpg",
            id: 3,
            year: 2011
        }
    ]});
    }

    componentDidUpdate(){}

    handleSort(sortedMovies){
        this.setState({movies: sortedMovies});
    }

    render(){
        return <div className="container">
        <MoviesCounter movies={this.state.movies}/>
        <Sort movies={this.state.movies} handler={this.handleSort} sortField="year"/>
        <Movies movies={this.state.movies}/>
    </div>;
    }
}

export default MainContainer;