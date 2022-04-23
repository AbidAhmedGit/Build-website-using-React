import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// redux imports
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component {
    render() {
        return (

            // provider makes redux store available to all connected components
            // that are children of app
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    };
}

export default App;