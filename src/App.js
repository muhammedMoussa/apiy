import React, { Component } from 'react'
import { Apiy } from 'apiy';

import Hero from './components/Hero';
import Footer from './components/Footer';
import Button from './components/Button';
import Code from './components/Code';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { code: '', response: '' };
    this.get = this.get.bind(this);
  }

  code = '';
  response = '';

  get() {
    const apiy = new Apiy();
    this.setState({
      code: `
        apiy.get({url: 'https://jsonplaceholder.typicode.com/todos/1'})
          .then(response => this.setState({ response }))
          .catch(response => this.setState({ response }))
      `
    })

    apiy.get({url: 'https://jsonplaceholder.typicode.com/todos/1'})
    .then(response => this.setState({ response }))
    .catch(response => this.setState({ response }))
  }

  render() {
    return (
      <>
        <Hero />
        <Button method="GET" onClick={this.get}/>
        <Button method="POST" onClick={this.test}/>
        <Button method="PUT" onClick={this.test}/>
        <Button method="DELETE" onClick={this.test}/>
        <Button method="PAATCH" onClick={this.test}/>
        <div className="row">
          <Code className="col s6" code={this.state.code}/>
          <Code className="col s6" code={this.state.response}/>
        </div>
        <Footer />
      </>
    )
  }
}
