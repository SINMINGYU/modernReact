import React from 'react';
import { useSampleDispatch, useSampleState } from './SampleContext';

function ReducerSample() {
	const state = useSampleState();
	const dispatch = useSampleDispatch();

	const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
	const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' });
	const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' });
	const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

	return (
		<div>
			<p>
				<code>count: </code> {state.count}
			</p>
			<p>
				<code>text: </code> {state.text}
			</p>
			<p>
				<code>color: </code> {state.color}
			</p>
			<p>
				<code>isGood: </code> {state.isGood ? 'true' : 'false'}
			</p>
			<div>
				<button onClick={setCount}>setCount</button>
				<button onClick={setText}>setText</button>
				<button onClick={setColor}>setColor</button>
				<button onClick={toggleGood}>toggleGood</button>
			</div>
		</div>
	);
}

export default ReducerSample;
