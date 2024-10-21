import React from "react";

const Search = () => {
  return (
    <div className="search-filter">
      <input type="text" placeholder="Search job..." />
      <button>search</button>
      <div className="search-section">
        <div className="filters">
          <select>
            <option value disabled selected>
              Location
            </option>
          </select>
          <select>
            <option value disabled selected>
              Job level
            </option>
          </select>
          <select>
            <option value disabled selected>
              Fresher
            </option>
          </select>
          <select>
            <option value disabled selected>
              Course
            </option>
          </select>
          <select>
            <option value disabled selected>
              Full-stack Web
            </option>
          </select>
          <button>Reset</button>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
            <span className="label-text">Only view available</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
