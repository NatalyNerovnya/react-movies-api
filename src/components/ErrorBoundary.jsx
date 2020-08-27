import React, { Component } from 'react';

export default class ErrorBoundary extends Component{
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(){
    return {hasError: true};
  }
  
  render(){
    if(this.state.hasError){
      return <span className={styles.span}>
      Oops... Something went wrong. Please, try to refresh the page.
    </span>
    }
    return this.props.children;
  }
}