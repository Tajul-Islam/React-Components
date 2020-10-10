import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import Hoc from "../../../Hoc/hoc";
import withPropClass from "../../../Hoc/withPropClass";
import AuthContext from "../../../Context/authContext";

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
    console.log('[Person.js] rendering...');
    return (
      <Hoc>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
          {
            this.context.authenticated ? <p>I'm Authenticated</p> : <p> Please Log In </p>
          }
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Hoc>
    );
  }
}

Person.prototypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withPropClass(Person, classes.Person);
