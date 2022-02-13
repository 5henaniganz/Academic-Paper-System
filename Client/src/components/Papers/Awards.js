import React from "react";

/**
 * Child component form that filters papers by awards.
 * 
 * @author Jordan Short
 */
class Awards extends React.Component {
  render() {
    return (
      <div className="w-full">
        <select
          className="w-11/12 p-2"
          value={this.props.awards}
          onChange={this.props.handleAwardsSelect}
        >
          <option value="">Any</option>
          <option value="Best paper">Best paper</option>
          <option value="Best paper honourable mention">
            Best paper honourable mention
          </option>
          <option value="Best pictoral">Best pictoral</option>
          <option value="Best pictoral honourable mention">
            Best pictoral honourable mention
          </option>
          <option value="Special recognition for diversity and inclusion">
            Special recognition for diversity and inclusion
          </option>
        </select>
      </div>
    );
  }
}

export default Awards;
