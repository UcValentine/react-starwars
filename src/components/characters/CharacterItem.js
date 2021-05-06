import React from "react";

export default class CharacterGrid extends React.Component {
  state = {
    loading: true,
    films: []
  };

  async componentDidMount() {
    const url = "https://swapi.dev/api/films/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ films: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.films.length) {
      return <div>didn't get a film</div>;
    }

    return (
         <div>
          {this.state.films.map(films => (
          <ul key={films.title}>
            <li>Title: {films.title}</li>
            <li>Release Date: {films.release_date}</li>
            <li>Opening Crawl: {films.opening_crawl}</li>
          </ul>
        ))}
       </div>
    );
  }
}