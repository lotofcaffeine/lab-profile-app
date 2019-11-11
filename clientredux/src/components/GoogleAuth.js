import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "970208680625-3seus2thfvdeip608f4tee646fsu0j2j.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  };
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return <div> loading.. </div>;
    } else if (this.props.isSignedIn) {
      return (
        <div onClick={this.onSignOutClick} className="ui red  google button">
          <i className="google icon"></i>Sign Out
        </div>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red button">
          <i className="google icon"></i>Sign In
        </button>
      );
    }
  };
  render() {
    return <div className="menu right">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
  mapStateToProps,
  { signOut, signIn }
)(GoogleAuth);
