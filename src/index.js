import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import InventoryEase from './components/inventory-ease';



ReactDOM.render(
    <Provider store={store}>
        <InventoryEase />
         
    </Provider>,
    document.getElementById('root')
);
    


