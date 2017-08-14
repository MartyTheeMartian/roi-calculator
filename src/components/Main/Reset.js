import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reset } from '../../actions';

class Reset extends Component {

  reset = () => {
    this.props.reset();
  }

  render() {
    return (
      <div id="reset" className="row">
        <button id="reset-btn" type="button" className="btn btn-warning btn-lg" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => { return {}; };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ reset }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
