import React, { Component } from 'react';
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

class GitTalk extends Component {

  componentDidMount(){
    const gitalk = new Gitalk({
      clientID: 'aee6db5f6657d8a329a0',
      clientSecret: 'dc656da5cb2af77e7dc26c332c9212e71ce70c09',
      repo: 'lmikoto/blog',
      owner: 'lmikoto',
      admin: ['lmikoto'],
      id: window.location.pathname,
      distractionFreeMode: false
    })
    gitalk.render('gitalk-container')
  }

  render(){
    return <div id="gitalk-container"></div>
  }
}

export default GitTalk;