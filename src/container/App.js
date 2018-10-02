import React from 'react';

import './App.scss';
import Todos from './Todos';

function App () {
	return (
		<div className="testing" >
			<h1>todos</h1>
			<Todos />
		</div>
	);
}

export default App;

// import React from 'react';
// import { connect } from 'react-redux';

// import './App.scss';
// import Todos from './Todos';
// import * as actionCreator from '../store/actions';

// function App(props) {
//         return(
//             <div className="testing" onClick={() => props.onIdEdit(' ')}>
//                 <h1>todos</h1>
//                 <Todos />
//             </div>
//         );
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onIdEdit : id => dispatch(actionCreator.edit_task_id(id))
//     }
// }

// export default connect(null, mapDispatchToProps)(App);
