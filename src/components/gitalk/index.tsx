import { Component } from 'react';
import * as React from 'react';
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

class GitTalk extends Component {

  componentDidMount(){
    const temp = window.location.pathname.split("/");
    const gitalk = new Gitalk({
      clientID: 'aee6db5f6657d8a329a0',
      clientSecret: 'dc656da5cb2af77e7dc26c332c9212e71ce70c09',
      repo: 'blog',
      owner: 'lmikoto',
      admin: ['lmikoto'],
      id: temp[temp.length - 2].slice(0,50),
      distractionFreeMode: false,
      title: temp[temp.length - 2].slice(0,50)
    })
    gitalk.render('gitalk-container')
  }

  render(){
    return <div id="gitalk-container" />
  }
}

export default GitTalk;