import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser, clearUser } from "../../ducks/reducer";
import axios from "axios";

class Private extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     username: "",
  //     img: "",
  //     balance: 0
  //   };
  // }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const { id } = this.props;
    if (!id) {
      try {
        let res = await axios.get("/api/current");
        this.props.updateUser(res.data);
      } catch (err) {
        this.props.history.push("/");
      }
    }
  };

  logout = async () => {
    this.props.clearUser();
    await axios.post("/auth/logout");
    this.props.history.push("/");
  };

  render() {
    const { username, img, balance } = this.props;
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
        <h1>{username}</h1>
        <img src={img} alt="user" />
        <p>{balance}</p>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

const mapDispatchToProps = {
  updateUser,
  clearUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Private);
