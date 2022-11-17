import React from "react";
import Input from "./Input";

class App extends React.Component {
  state = {
    submit: { name: "", email: "", date: "", password: "" },
    page: 0,
  };

  onInput = (event) => {
    const submit = this.state.submit;
    const currentInput = event.currentTarget;

    if (currentInput.id === "name") {
      submit.name = currentInput.value;
    } else if (currentInput.id === "email") {
      submit.email = currentInput.value;
    } else if (currentInput.id === "date") {
      submit.date = currentInput.value;
    } else {
      submit.password = currentInput.value;
    }
    this.setState({ submit });
  };

  next = (event) => {
    event.preventDefault();
    let page = this.state.page;

    if (event.target.parentElement[0].checkValidity()) {
      page++;
      this.setState({ page });
      document.querySelector("input").classList.remove("error");
      document.querySelector("input").value = "";
    } else {
      document.querySelector("input").classList.add("error");
    }
  };
  back = () => {
    let page = this.state.page;
    page--;
    this.setState({ page });
  };

  renderInputs = () => {
    if (this.state.page === 0) {
      return (
        <Input
          type="text"
          label="Name"
          onInput={this.onInput}
          value={this.state.submit.name}
        />
      );
    } else if (this.state.page === 1) {
      return (
        <Input
          type="email"
          label="Email"
          onInput={this.onInput}
          value={this.state.submit.email}
        />
      );
    } else if (this.state.page === 2) {
      return (
        <Input
          type="date"
          label="date"
          onInput={this.onInput}
          value={this.state.submit.date}
        />
      );
    } else if (this.state.page === 3) {
      return (
        <Input
          type="password"
          label="Password"
          onInput={this.onInput}
          value={this.state.submit.password}
        />
      );
    } else {
      return [
        <h1>Details</h1>,
        <p>Name: {this.state.submit.name}</p>,
        <p>Email: {this.state.submit.email}</p>,
        <p>Date: {this.state.submit.date}</p>,
        <p>Password: {this.state.submit.password}</p>,
      ];
    }
  };

  render() {
    return (
      <form className="box">
        {this.state.page > 0 && this.state.page < 4 ? (
          <a onClick={this.back}>{"< Back"}</a>
        ) : null}
        {this.renderInputs()}
        {this.state.page >= 0 && this.state.page <= 3 ? (
          <input
            type="submit"
            onClick={this.next}
            value={this.state.page === 3 ? "Submit" : "Next"}
          />
        ) : null}
      </form>
    );
  }
}
export default App;
