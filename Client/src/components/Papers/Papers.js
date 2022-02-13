import React from "react";
import PapersFilter from "./PapersFilter";
import Search from "../Search";
import Awards from "./Awards";

/**
 * Parent component that instantiates "Awards" & and "PapersFilter"
 *
 * @author Jordan Short
 */
class Papers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1, search: "", awards: "" };
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
            Search Papers
          </h1>
          <div className="flex flex-row justify-center items-center">
            <div>
              <Search
                search={this.state.search}
                handleSearch={this.handleSearch}
              />
            </div>
            <div>
              <Awards
                awards={this.state.awards}
                handleAwardsSelect={this.handleAwardsSelect}
              />
            </div>
          </div>

          <PapersFilter
            awards={this.state.awards}
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
export default Papers;
