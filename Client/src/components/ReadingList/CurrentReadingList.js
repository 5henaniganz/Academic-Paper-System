import React from "react";
import _ from "lodash";

/**
 * Gets a list of all papers by id and lists them.
 * 
 * Gets a list of all papers by id and then makes use of lodash to filter
 * and merge duplicate results.
 * 
 * @author Jordan Short
 */
class CurrentReadingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  componentDidMount() {
    fetch(
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?id=" +
        this.props.curPaperId
    )
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

  render() {
    let filteredResults = _.uniqBy(this.state.results, "title");
    return (
      <div className="font-mono mt-2 mb-2 font-semibold text-center">
        {filteredResults &&
          filteredResults.map((papers, i) => <li className="inline"> {papers.title} </li>)}
      </div>
    );
  }
}
export default CurrentReadingList;
