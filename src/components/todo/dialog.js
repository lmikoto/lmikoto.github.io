import React, { Component } from 'react';

class Dialog extends Component {
  state = {
    value: ''
  }

  onEdit = (e) => {
    this.setState({value: e.target.value})
  }

  onSave = (e) => {
    if(e.keyCode === 13){
      const { value = '' } = this.state;
      if(value.length !== 0){
        this.props.addNewTask({name: value});
        this.setState({ value: ''})
      }
    }
  }

	render () {
    const { value } = this.state;
		return (
			<div className="dialog">
				<div>
					<input onChange={this.onEdit} onKeyUp={this.onSave} value={value} type="text" placeholder="您想做点什么"  />
				</div>
			</div>
		);
	}
}

export default Dialog;