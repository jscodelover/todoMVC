import React from 'react';
import { connect } from 'react-redux';

import './Todos.scss';
import InputBox from '../components/InputBox';
import Footer from '../components/Footer';
import DisplayTodos from '../components/DisplayTodos';
import * as actionCreator from '../store/actions';

class Todos extends React.Component{
    taskComplete = (id) => {
    	this.props.isComplete(id);
    }
    cancelTask = id => {
    	this.props.onClear([id]);
    }
    render(){
    	if(this.props.task.length === 0)
    	{
    		return(
    			<ul className="todoBox">
    				<li>
    					<label></label>
    					<InputBox getTask={data => {this.props.onAdd(data);}} />
    				</li>   
    			</ul>
    		);
    	}
    	else{
    		return(
    			<ul className="todoBox">
    				<li>
    					<label forhtml="task" onClick={this.props.selectAll}><i className="fas fa-angle-down"></i></label>
    					<InputBox getTask={data => {this.props.onAdd(data);}} />
    				</li>
    				<DisplayTodos taskArray={this.props.task}
    					showStatus={this.props.showStatus}
    					completeStatus={this.taskComplete} 
    					removeTask={this.cancelTask}
    					updatedId={this.props.id}
    					idEdit={this.props.onIdEdit}
    					getEditedTask={data => {this.props.onAdd(data);}}
    				/> 
    				<li><Footer taskArray={this.props.task} displayTask={this.props.onShowTask} clearTask={this.props.onClear} /></li>
    			</ul>
    		);    
    	}
    }
}

const mapStateToProps = state => {
	console.log(state);
	return {
		task : state.taskList,
		showStatus : state.showStatus,
		id : state.id
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAdd : newTask => dispatch(actionCreator.add(newTask)),
		onShowTask : showStatus => dispatch(actionCreator.show_task(showStatus)),
		onClear : IdArray => dispatch(actionCreator.clear(IdArray)),
		isComplete : (id) => dispatch(actionCreator.is_complete(id)),
		selectAll : () => dispatch(actionCreator.select_all()),
		onIdEdit : id => dispatch(actionCreator.edit_task_id(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);


