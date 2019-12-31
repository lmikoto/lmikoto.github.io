import React, { Component } from 'react';
import ListItem from '../../components/todo/listItem';
import Dialog from '../../components/todo/dialog';
import { save, get } from '../../utils/localStorage';
import './index.css';

const defaultStatus = {
  list: [
    {
      id: 1,
      name: '吃饭',
      status: 0
    },
    {
      id: 2,
      name: '睡觉',
      status: 0
    },
    {
      id: 3,
      name: '写bug',
      status: 0
    }
  ],
  finished: 0,
  idCounter: 3
}

class TodoList extends Component {
  state = defaultStatus;

	addNewTask =  ({name}) => {
    const { list,idCounter } = this.state;
    const newId = idCounter + 1;
		list.unshift({ id: newId,status: 0, name});
		this.setState({ list, idCounter: newId },this.syncLocalStorage);
	}

	handleFinish = (todoItem) => {
    const { list } = this.state;
		let sum = 0;
		list.forEach( (item) => {
			if (item.id === todoItem.id) {
				item.status = todoItem.status;
			}
			if (item.status === 1) {
				sum++;
			}
		});
		this.setState({
      finished: sum,
      list, 
		},this.syncLocalStorage);
	}

	handleDelete = (id) => {
		let newList = [], sum = 0;
		this.state.list.forEach((item) => {
			if (item.id !== id) {
				newList.push(item);
				if (item.status === 1 ) {
					sum++;
				}
			}
		});
		this.setState({
			list: newList,
			finished: sum
		},this.syncLocalStorage);
	}

  syncLocalStorage = () => {
    save("mokotoTodo",this.state)
  }

  componentDidMount(){
   const state = get("mokotoTodo",defaultStatus);
   this.setState(state)
  }

	render () {
    const { list } = this.state;
		return (
			<div className="container">
				<h1>TodoList</h1>
				<ul>
					{ list.map ((item, index) =>
						<ListItem 
							item={item}  
							handleFinish={this.handleFinish} 
							handleDelete={this.handleDelete}
							key={index}
						/>
					)}
					<li>{this.state.finished}已完成&nbsp;/&nbsp;{this.state.list.length}总数</li>
				</ul>
				<Dialog addNewTask={this.addNewTask}/>
			</div>
		);
	}
}

export default TodoList;