import React from 'react';
import './css/style.css';
import {useSelector, useDispatch} from 'react-redux';
import {incNum, decNum} from './actions/index';

function App() {
	const myState = useSelector((state) => state.changeNum);
	const dispatch = useDispatch();
    return (
        <>
			<div className = 'border'>
				<h1>Redux</h1>
				<div className = 'wall'>
					<a><label onClick = {() => dispatch(incNum())}>+</label></a>
					<input type = 'text' value = {myState} />
					<a><label onClick = {() => dispatch(decNum())}>-</label></a>
				</div>
			</div>
       </>
    )
}

export default App