import React from 'react';

import './InputBox.scss';

const inputBox = props => {
	function taskInput (e) {
		if (e.keyCode === 13 && e.target.value !== '') {
			let value = e.target.value;
			document.getElementById('task').value = '';
			props.getTask(value);
		}
	}
	let value = props.usertask ? props.usertask : null;
	return (
		<div className="inputBox">
			<input type="text"
				id="task"
				autoFocus="autofocus"
				onKeyUp={e => { taskInput(e); }}
				placeholder="What needs to be done?"
				defaultValue={value}/>
		</div>
	);
};

export default inputBox;
