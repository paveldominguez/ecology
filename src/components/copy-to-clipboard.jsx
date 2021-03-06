/* eslint-disable max-len */
import React from "react";
import ReactDOM from "react-dom";
import Clipboard from "clipboard";

export default class CopyToClipboard extends React.Component {
  componentDidMount() {
    this.clipboard = new Clipboard(ReactDOM.findDOMNode(this.refs.copyToClipboard));
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <button
        ref="copyToClipboard"
        className="Button-Clipboard"
        data-clipboard-text={this.props.source}
      >
        Copy to Clipboard
      </button>
    );
  }
}

CopyToClipboard.propTypes = {
  source: React.PropTypes.string
};
