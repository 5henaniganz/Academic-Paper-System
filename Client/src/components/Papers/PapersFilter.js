import React from "react";

/**
 * Child component that gets list of papers, abstract and author names
 * 
 * Uses the fetch API to send a get request, retrieves all papers.
 * onClick functionality to enable abstract and author name to become visible
 * when clicked.
 * 
 * @author Jordan Short
 */
class PapersFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      display: false,
      paperKey: null,
    };
  }

  componentDidMount() {
    let url =
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ results: data.results });
      })
      .catch((err) => {
        console.log("something went wrong ", err);
      });
  }
  filterSearch = (paper) => {
    return paper.title.toLowerCase().includes(this.props.search.toLowerCase());
  };

  filterByAwards = (paper) => {
    return paper.awards === this.props.awards || this.props.awards === "";
  };

  showPaperInfo = (thing) => {
    this.setState({ display: !this.state.display });
    this.setState({ paperKey: thing });
  };

  render() {
    let filteredResults = this.state.results;

    let buttons = "";

    if (this.props.page !== undefined) {
      const pageSize = 10;
      let pageMax = this.props.page * pageSize;
      let pageMin = pageMax - pageSize;

      buttons = (
        <div className="mt-5">
          <button
            className="mt-5 mr-3 font-bold"
            onClick={this.props.handlePreviousClick}
            hidden={this.props.page <= 1}
          >
            Previous
          </button>
          Page {this.props.page} of {Math.ceil(filteredResults.length / 10)}
          <button
            className="ml-3 font-bold"
            onClick={this.props.handleNextClick}
            hidden={
              this.props.page >= Math.ceil(filteredResults.length / pageSize)
            }
          >
            Next
          </button>
        </div>
      );

      filteredResults.sort(function (a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      filteredResults = filteredResults
        .filter(this.filterSearch)
        .filter(this.filterByAwards)
        .slice(pageMin, pageMax);
    }

    return (
      <div className="font-mono mt-8 flex flex-col">
        {this.state.results &&
          filteredResults.map((paper, i) => (
            <div
              onClick={() => this.showPaperInfo(i)}
              key={i}
              className="mt-6 cursor-pointer"
            >
              <div className="hover:opacity-50">{paper.title}</div>

              {this.state.display && this.state.paperKey === i ? (
                <div>
                  <p className="mt-5">
                    {"Author: " + paper.first_name + " " + paper.last_name}
                  </p>
                  <p className="mt-5">{paper.abstract}</p>
                </div>
              ) : null}
            </div>
          ))}
        {buttons}
      </div>
    );
  }
}
export default PapersFilter;
