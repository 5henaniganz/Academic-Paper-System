import React from "react";

/**
 * Reusuable search bar form.
 * 
 * @author Jordan Short
 */
class Search extends React.Component {
  render() {
    return (
      <input
        className="ml-3 w-11/12 p-1 border"
        type="text"
        placeholder="search"
        value={this.props.search}
        onChange={this.props.handleSearch}
      />
    );
  }
}

export default Search;
