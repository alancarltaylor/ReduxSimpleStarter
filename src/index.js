import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some html
const App = function(){
	return <div>Hello World of Zayo</div>;
}


// Take this component's generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
