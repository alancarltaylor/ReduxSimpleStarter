import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAEYK9rbc27VCgEdh-ZerzRpryxmzqfs8U';

// Create a new component. This component should produce some html
const App = function(){
	return (<div>
	<SearchBar />
	</div>);
}


// Take this component's generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
