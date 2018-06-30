import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ButtonWithWarning extends PureComponent {
  constructor(props) {
    super(props);

    this.handleDisplayWarning = this.handleDisplayWarning.bind(this);
    this.state = {
      displayWarning: false,
    };
  }

  handleDisplayWarning() {
    this.setState({
      displayWarning: true,
    });
  }

  render() {
    const { warnText, onClick, children, ...rest } = this.props;
    const { displayWarning } = this.state;

    if (displayWarning) {
      return (
        <button onClick={onClick} {...rest}>
          {warnText}
        </button>
      );
    }

    return (
      <button onClick={this.handleDisplayWarning} {...rest}>
        {children}
      </button>
    );
  }
}

ButtonWithWarning.defaultProps = {
  warnText: 'Are you sure ?',
};

ButtonWithWarning.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  warnText: PropTypes.string,
};

export default ButtonWithWarning;
