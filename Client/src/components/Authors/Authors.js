import React from "react";
import AuthorsFilter from "./AuthorsFilter";
import Search from "../Search";

/**
 * Parent component that impliments search & pagination
 * 
 * Makes use of the global "search" component and local "AuthorsFilter" to present a list
 * of all authors.
 * 
 * @author Jordan Short
 */
class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1, search: "" };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAwardsSelect = this.handleAwardsSelect.bind(this);
  }

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handlePreviousClick = () => {
    this.setState({ page: this.state.page - 1 });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleAwardsSelect = (e) => {
    this.setState({ awards: e.target.value });
  };

  render() {
    return (
      <div className="font-mono mt-8 flex flex-col">
        <div className="text-center">
          <h1 className="text-2xl text-head-orange font-bold mb-5">
            Search Authors
          </h1>
          <div className="flex flex-row justify-center items-center md:mr-72 md:ml-72">
            <Search
              search={this.state.search}
              handleSearch={this.handleSearch}
            />
          </div>

          <AuthorsFilter
            search={this.state.search}
            page={this.state.page}
            handleNextClick={this.handleNextClick}
            handlePreviousClick={this.handlePreviousClick}
          />
        </div>
      </div>
    );
  }
}
export default Authors;