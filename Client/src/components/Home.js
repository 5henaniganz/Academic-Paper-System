import React from "react";
import ImgMain from "../Assets/person_reading.png";

/**
 * Homepage gets random paper with their authors & abstract.
 * 
 * @author Jordan Short
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  componentDidMount() {
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    let url =
      "http://unn-w18039155.newnumyspace.co.uk/kf6012/coursework/part1/api/papers?id=" +
      Math.floor(getRandom(60071, 60223));
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
      <div className="font-mono mt-8">
        <div className="mt-8">
          <div className="flex justify justify-center">
            <img src={ImgMain} className="max-w-sm" alt="person_reading" />
          </div>
          <div>
            <h1 className="text-text-dark text-xl font-bold text-center">
              Random Paper
            </h1>
            {this.state.results[0] && (
              <div className="mt-3 text-center">
                <div className="font-bold text-text-dark">Paper: </div>
                {this.state.results[0].title}
              </div>
            )}
            {this.state.results[0] && (
              <div className="mt-3 text-center">
                <div className="font-bold text-text-dark">Authors: </div>
                {this.state.results.map((paper, i) => (
                  <div key={i}>
                    {paper.first_name + " " + paper.last_name + ","}
                  </div>
                ))}
              </div>
            )}
            {this.state.results[0] && (
              <div className="mt-3 text-center">
                <div className="font-bold text-text-dark">Abstract: </div>
                {this.state.results[0].abstract.substring(0, 150) + "..."}
              </div>
            )}
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}
export default Home;
