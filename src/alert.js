import React from 'react';

/**
 * Display error messages.
 */
class Alert extends React.Component {
  /**
   * create instance.
   * @param {object} props - The prop passed from parent.
   */
  constructor(props) {
    super(props);
  }
  /**
   * Render the component.
   */
  render() {
    return (
      <span className="colorRed">{this.props.errorMsg}</span>
    );
  }
}

/**
 * propType validation.
 */
Alert.propTypes = { errorMsg: React.PropTypes.string};
export default Alert;
