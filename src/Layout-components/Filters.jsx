import React from 'react'
import styled from 'styled-components'
const Filters = (props) => {
    const [selectedGenre, setSelectedGenre] = React.useState("All");

    const handleGenreChange = (event) => {
      const selectedGenre = event.target.value;
      setSelectedGenre(selectedGenre);
      // console.log(selectedGenre)
      props.handleGenreUpdate(selectedGenre);
    };
    const buttonStyle = styled.div `
        eight: 34px;
        padding: 6px 26px;
        font-style: normal;
        font-weight: 500;
        border: none;
        border-radius: 5px;
        background-color: #FFEAD0;
        color: #4D4D4D;
        transition: 200ms all cubic-bezier(0.4, 0, 0.2, 1);
    `;

    return (
      <div className="flex flex-wrap gap-2">
        <buttonStyle onClick={props.handleFilter}>All</buttonStyle>
        <buttonStyle  onClick={props.handleFilter}>A-Z</buttonStyle>
        <buttonStyle  onClick={props.handleFilter}>Z-A</buttonStyle>
        <buttonStyle  onClick={props.handleFilter}>Newest</buttonStyle>
        <buttonStyle  onClick={props.handleFilter}>Oldest</buttonStyle>
  
        <select className="filter__dropdown" value={selectedGenre} onChange={handleGenreChange}>
          <option defaultValue style={{ display: 'none' }} value="All">All Genres</option>
          {props.genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    );
}

export default Filters