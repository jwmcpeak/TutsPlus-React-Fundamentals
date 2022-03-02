import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import itemStorage from './item-storage';

ReactDOM.render(
    <App
        todoItems={itemStorage.getItems()}
        onSaveItems={itemStorage.saveItems}
    />,
    document.getElementById('root')
);