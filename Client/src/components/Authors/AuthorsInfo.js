import React from "react";
import AuthorsList from "./AuthorsList";

/**
 * Child component that gets list of authors by id
 * 
 * Uses the fetch API to send a get request, retrieves authors by id.
 * loops over title and abstract, then instantiates the "AuthorsList" component.
 * 
 * @author Jordan Short
 */
class AuthorsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      paperIdResults: [],
      paperIdReal: "",
    };
  }
  componentDidMount() {
    let url =
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?authorid=" +
      this.props.authorId;

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

  render() {
    return (
      <div className="w-full">
        {this.state.results
          ? this.state.results.map((paper, i) => (
              <div className="mt-5" key={i}>
                <h1 className="font-bold">Title</h1>
                {paper.title}{" "}
                <div className="mt-3">
                  <h1 className="font-bold">Abstract</h1>
                  {paper.abstract}
                </div>
                <div>
                  <AuthorsList paperId={paper.paper_id} />
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default AuthorsInfo;
