import React, { Component } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TodoItem extends Component {
    render() {
        const { title , handleDelete ,handleEdit } = this.props;
        
        return (
          <li className='list-group-item text-capitalize d-flex 
              justify-content-between my-2'>
              <h6 >{title}</h6>
            <div className='todo-icon'>
                <button type="button" className='btn btn-primary buton' onClick={handleEdit}> Edit Item</button>
                 <i className='fas fa-pen'/> 
                 &emsp;     
  
                 <button type="button" className='btn btn-danger buton' onClick={handleDelete}> Remove Item </button>
                 <i className='fas fa-trash'/>
                 
                  </div>
                  </li>
        );
    }
}
