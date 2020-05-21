import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Styles = {
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  header: {
    textAlign: 'center'
  },
  image: {
    display: 'block',
    margin: '0 auto 20px'
  },
  title: {
    display: 'block',
    fontSize: '2em',
    fontWeight: 700
  },
  subtitle: {
    fontSize: '1em',
    fontWeight: 300
  }
};

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: ''
    };
  }

  render() {
    return (
      <div style={Styles.flexContainer}>
        <header style={Styles.header}>
          <img
            style={Styles.image}
            src="/images/mullet_600.png"
            width="200"
            alt="Mullet"
          />
          <p style={Styles.title}>{this.state.item} {this.props.title}</p>
          <p style={Styles.subtitle}>{this.props.subtitle}</p>
          <p style={Styles.subtitle}>
            Created by <a href="http://github.com/lynnaloo/">@lynnaloo</a>
          </p>
        </header>
      </div>
    );
  }

  componentDidMount() {
    fetch("/api/greeting")
      .then(res => res.text())
      .then(
        (body) => {
          console.log("debug", body);
          this.setState({
            isLoaded: true,
            item: body
          });
        },
        (error) => {
          console.log("uh oh, there was an error");
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
}

Facebook.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string
};

Facebook.defaultProps = {
  title: 'Default Title',
  subtitle: 'Default Subtitle'
};
