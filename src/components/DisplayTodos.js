import React from 'react';
import InputBox from './InputBox';

const displayTodos = props => {
	function showCancelBtn (id) {
		document.getElementById(id).classList.remove('hidden');
		document.getElementById(id).classList.add('visible');
	}
	function hideCancelBtn (id) {
		document.getElementById(id).classList.remove('visible');
		document.getElementById(id).classList.add('hidden');
	}
	function editingTask (id) {
		props.idEdit(id);
	}
	return (
		<div>
			{
				props.taskArray.map(task => {
					if (props.showStatus === ' ' || props.showStatus === task.complete) {
						if (props.updatedId !== task.taskID) {
							return <li key={task.taskID} className="displayTask" onMouseOver={() => { showCancelBtn(task.taskID); }} onMouseOut={() => { hideCancelBtn(task.taskID); }}>
								<p onDoubleClick={() => editingTask(task.taskID)}>
									<label id={'l' + task.taskID} className={task.class + 'label'} onClick={() => { props.completeStatus(task.taskID); }}>
										<i className="fas fa-check"></i>
									</label>
									<span id={'t' + task.taskID} className={task.class + 'task'}>{task.task}</span>
								</p>
								<button id={task.taskID}><i className="fas fa-times" onClick={() => { props.removeTask(task.taskID); }}></i></button>
							</li>;
						} else { return <li key={task.taskID}><label></label><InputBox usertask={task.task} getTask={props.getEditedTask}/></li>; }
					} else {
						return null;
					}
				})
			}
		</div>
	);
};

export default displayTodos;
