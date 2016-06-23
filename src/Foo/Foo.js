import React from 'react';

class Foo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <span>Hello Mr.{this.props.errorMsg}. I am the foo component.</span>
      </div>
    );
  }

}
Foo.propTypes = { name: React.PropTypes.string};
export default Foo;
