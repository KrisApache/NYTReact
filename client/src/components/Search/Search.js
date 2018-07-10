import React from 'react';

const Search = ({ title, url, _id, date, handleClick, buttonText, saved, icon }) => (
    <div style={{paddingLeft:"20px", paddingRight:"20px"}}>

        <input placeholder="Topic" id="topic" type="text" class="validate" />
        <label for="topic">Topic</label>
        <input placeholder="Start Year" id="start_year" type="text" class="validate" />
        <label for="start_year">Start Year</label>
        <input placeholder="End year" id="end_year" type="text" class="validate" />
        <label for="end_year">End Year</label>

        <div className="card-action center">
            <button className="btn waves-effect waves-light  light-blue darken-1" type="submit" name="action" onClick={() => handleClick(_id)}>
                <i className="material-icons">search</i>
            </button>

        </div>
    </div>
);


export default Search;