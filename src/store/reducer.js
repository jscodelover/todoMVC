import shortid from 'shortid';

import * as actionCreator from './actions';

const initialState = {
	taskList: [],
	showStatus: ' ',
	isSelectAll: true,
	id: ' '
};

const task = (state, action) => {
	let newTask = {
		taskID: shortid.generate(),
		complete: false,
		class: 'inComplete',
		task: action.newTask
	};
	return newTask;
};
const updateTaskList = (array, action) => {
	let newTaskList = [...array];
	for (let id of action.IdArray) {
		let index = newTaskList.findIndex(task => id === task.taskID);
		newTaskList.splice(index, 1);
	}
	return newTaskList;
};
const isComplete = (array, action) => {
	if (array.length > 0) {
		let index = array.findIndex(task => action.id === task.taskID);
		if (index > -1) {
			let taskObj = array[index];
			taskObj.complete = !taskObj.complete;
			taskObj.class = taskObj.complete ? 'complete' : 'inComplete';
			array[index] = { ...taskObj };
		}
		return array;
	}
};
const editTask = (state, action) => {
	let newTaskList = state.taskList;
	let index = newTaskList.findIndex(task => state.id === task.taskID);
	let taskObj = { ...newTaskList[index] };
	taskObj.task = action.newTask;
	newTaskList[index] = taskObj;
	return newTaskList;
};
const selectAll = (state) => {
	let comp, cls;
	if (state.isSelectAll) {
		comp = true;
		cls = 'complete';
	} else {
		comp = false;
		cls = 'inComplete';
	}
	let newTaskList = state.taskList.reduce((newAr, task) => {
		newAr.push({
			...task,
			complete: comp,
			class: cls
		});
		return newAr;
	}, []);
	return newTaskList;
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case actionCreator.ADD :
		if (state.id !== ' ') {
			return {
				...state,
				taskList: [...editTask(state, action)],
				id: ' '
			};
		} else {
			return {
				...state,
				taskList: state.taskList.concat({ ...task(state, action) })
			};
		}
	case actionCreator.SHOW_TASK : return {
		...state,
		showStatus: action.showStatus
	};
	case actionCreator.CLEAR : return {
		...state,
		taskList: [...updateTaskList(state.taskList, action)]
	};
	case actionCreator.IS_COMPLETE : return {
		...state,
		taskList: [...isComplete(state.taskList, action)]
	};
	case actionCreator.SELECT_ALL : return {
		...state,
		taskList: [...selectAll(state)],
		isSelectAll: !state.isSelectAll
	};
	case actionCreator.EDIT_TASK_ID : return {
		...state,
		id: action.id
	};
	default : return state;
	}
};

export default reducer;
