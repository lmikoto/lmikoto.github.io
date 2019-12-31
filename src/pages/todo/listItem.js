import React, { Component } from 'react';

class ListItem extends Component {

	handleFinish  = () => {
		const { status,id }= this.props.item;
		const newStatus = (status === 0 ? 1 : 0);
		this.props.handleFinish({
			id,
			status: newStatus
		});	
	}

	handleDelete = () => {
    const { id } = this.props.item;
		this.props.handleDelete(id);
	}

	render () {
		const item = this.props.item;

		const unfinish = {
			backgroundColor: '#DFFCB5',
			color: '#2EB872',
		};

		const finish = {
			backgroundColor: '#FFFA9D',
			color: '#FF9A3C',
			textDecoration: 'line-through'
		}

		var itemStyle = item.status === 0 ? unfinish : finish;
		
		return (
			<li key={item.id} style={itemStyle}>
				<span 
					onClick={this.handleFinish} 
					id={item.id}
					className="check-btn"
					style={{backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB'}}
				></span>
				<span>{ item.name }</span>
				<span onClick={this.handleDelete} className="delete-btn">删除</span>
			</li>
		);
	}
}

export default ListItem;