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
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }

  get() {
    const apiy = new Apiy();
    this.setState({
      code: `
        apiy.get({url: 'https://jsonplaceholder.typicode.com/posts/74'})
          .then(response => console.log(response))
          .catch(error => console.log(error))
      `
    })

    apiy.get({url: 'https://jsonplaceholder.typicode.com/posts/74'})
    .then(response => this.setState({ response }))
    .catch(response => this.setState({ response }))
  }

  post() {
    const apiy = new Apiy();
    this.setState({
      code: `
        apiy.post({
          url: 'https://jsonplaceholder.typicode.com/posts',
          body: {
            title: 'Hello World!'
          },
          allowCors: true,
          responseType: 'text',
          headers: {
            'Accept-Lang': 'en-Us'
          }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
      `
    })

    apiy.post({
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'Hello World!'
      },
      allowCors: true,
      responseType: 'text',
      headers: {
        'Accept-Lang': 'en-Us'
      }
    })
    .then(response => this.setState({ response }))
    .catch(response => this.setState({ response }))
  }

  put() {
    const apiy = new Apiy();
    this.setState({
      code: `
        apiy.put({
          url: 'https://jsonplaceholder.typicode.com/posts/74',
          body: {
            title: 'Hello World From Apiy!'
          },
          allowCors: true
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
      `
    })

    apiy.put({
      url: 'https://jsonplaceholder.typicode.com/posts/74',
      body: {
        title: 'Hello World From Apiy!'
      },
      allowCors: true
    })
    .then(response => this.setState({ response }))
    .catch(response => this.setState({ response }))
  }


  delete() {
    const apiy = new Apiy();
    this.setState({
      code: `
        apiy.delete({url: 'https://jsonplaceholder.typicode.com/posts/74'})
          .then(response => console.log(response))
          .catch(error => console.log(error))
      `
    })

    apiy.delete({url: 'https://jsonplaceholder.typicode.com/posts/74'})
    .then(response => this.setState({ response }))
    .catch(response => this.setState({ response }))
  }

  render() {
    return (
      <>
        <Hero />
        <Button method="GET" onClick={this.get}/>
        <Button method="POST" onClick={this.post}/>
        <Button method="PUT" onClick={this.put}/>
        <Button method="DELETE" onClick={this.delete}/>
        <div className="row">
          <Code className="col s12 l12 m12" code={this.state.code}/>
          <Code className="col s12" code={this.state.response}/>
        </div>
        <Footer />
      </>
    )
  }
}
