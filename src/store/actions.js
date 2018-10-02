export const ADD = 'ADD';
export const SHOW_TASK = 'SHOW_TASK';
export const CLEAR = 'CLEAR';
export const IS_COMPLETE = 'IS_COMPLETE';
export const SELECT_ALL = 'SELECT_ALL';
export const EDIT_TASK_ID = 'EDIT_TASK_ID';

export const add = (newTask) => {
	return {
		type: 'ADD',
		newTask
	};
};

export const show_task = (showStatus) => {
	return {
		type: 'SHOW_TASK',
		showStatus
	};
};

export const clear = (IdArray) => {
	return {
		type: 'CLEAR',
		IdArray
	};
};

export const is_complete = (id) => {
	return {
		type: 'IS_COMPLETE',
		id
	};
};

export const select_all = () => {
	return {
		type: 'SELECT_ALL'
	};
};

export const edit_task_id = (id) => {
	return {
		type: 'EDIT_TASK_ID',
		id
	};
};
