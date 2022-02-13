import React from "react";
import AuthorsInfo from "./AuthorsInfo";

/**
 * Child component that gets list of authors and filters results
 * 
 * Uses the fetch API to send a get request, retrieves all authors.
 * Sort and filter logic implimented in this component as well as onClick functionality
 * to enable "AuthorsInfo" component when clicked.
 * 
 * @author Jordan Short
 */
class AuthorsFilter extends React.Component {
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
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/authors";
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
    return paper.first_name
      .toLowerCase()
      .includes(this.props.search.toLowerCase());
  };

  showPaperInfo = async (id) => {
    this.setState({ display: !this.state.display });
    this.setState({ paperKey: (this.state.paperKey = id) });
  };

  render() {
    let filteredResults = this.state.results;
    let buttons = "";

    if (this.props.page !== undefined) {
      const pageSize = 25;
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
          Page {this.props.page} of {Math.ceil(filteredResults.length / 25)}
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
        let textA = a.first_name.toUpperCase();
        let textB = b.first_name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      filteredResults = filteredResults
        .filter(this.filterSearch)
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
              <div className="hover:opacity-50">
                {paper.first_name + " " + paper.last_name}
              </div>

              {this.state.display && this.state.paperKey === i ? (
                <div>
                  {this.state.results && (
                    <AuthorsInfo authorId={paper.author_id} />
                  )}
                </div>
              ) : null}
            </div>
          ))}
        {buttons}
      </div>
    );
  }
}
export default AuthorsFilter;