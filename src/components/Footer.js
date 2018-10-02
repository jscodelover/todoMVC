import React from 'react';

import './Footer.scss';

class Footer extends React.Component{
    displayAllTask = () => { 
    	this.props.displayTask(' ');
    }
    displayIncompleteTask = () => {
    	this.props.displayTask(false);                
    }
    displayCompleteTask = () => {
    	this.props.displayTask(true);
    }
    removeTask = () => {
    	let taskArray = this.props.taskArray.reduce((array,task) => {
    		if(task.complete)    
    		{
    			array.push(task.taskID);
    		}    
    		return array;
    	},[]);
    	this.props.clearTask(taskArray);
    }
    itemLeft(){
    	let remaining = this.props.taskArray.reduce((sum, task) => {
    		if(!task.complete){
    			sum+=1;
    		}
    		return sum;
    	},0);
    	return remaining;
    }
    render(){
    	return(
    		<div className="footer">
    			<span>{this.itemLeft()} items left</span>
    			<span>
    				<a href="#All" onClick={this.displayAllTask}>All</a>
    				<a href="#Incomplete" onClick={this.displayIncompleteTask}>Active</a>
    				<a href="#Complete" onClick={this.displayCompleteTask}>Completed</a>
    			</span>
    			<span>
    				{
    					this.props.taskArray.some(task => task.complete) ? 
    						<a href="#Clearcomplete" onClick={this.removeTask}>Clear completed</a> 
    						:
    						null
    				}
    			</span>
    		</div>
    	);
    }
} 

export default Footer;























