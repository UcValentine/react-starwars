import React from 'react';

export default class Character extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://swapi.dev/api/people/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

    return (
        <section className='cards'>
        {this.state.people.map(person => (
          <div key={person.name}>
            <a href="/CharacterItem.js">{person.name}</a>
          </div>
        ))}
      </section>
    );
  }
}