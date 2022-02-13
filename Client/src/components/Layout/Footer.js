import React from "react";
/**
 * Component that creates a reusuable footer
 * 
 * @author Jordan Short
 */
class Footer extends React.Component {
  render() {
    return (
      <footer className="font-mono mt-8 footer--pin bg-lime-green h-22 md:h-20">
        <h1 className="p-5">
          Jordan Short (W18039155) - This is a university project and is not
          intended for live use.
        </h1>
      </footer>
    );
  }
}
export default Footer;