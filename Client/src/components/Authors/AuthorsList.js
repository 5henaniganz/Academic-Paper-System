import React from "react";

/**
 * Child component that gets list of authors and collates them underneath
 * the appropriate paper.
 * 
 * @author Jordan Short
 */
class AuthorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paperIdResults: [],
    };
  }
  componentDidMount() {
    let urlPaper =
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?id=" +
      this.props.paperId;

    fetch(urlPaper)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ paperIdResults: data.results });
      })
      .catch((err) => {
        console.log("something went wrong ", err);
      });
  }

  render() {
    return (
      <div className="w-full">
        <h1 className="mt-3 font-bold">Authors</h1>
        {this.state.paperIdResults
          ? this.state.paperIdResults.map((paper, i) => (
              <p className=" inline" key={i}>
                {paper.first_name} {paper.last_name}{" "}
              </p>
            ))
          : null}
      </div>
    );
  }
}

export default AuthorsList;
