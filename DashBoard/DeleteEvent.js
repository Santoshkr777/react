import React, { Component } from 'react';
import UpcomingEvent from './UpcomingEvent'
export class DeleteEvent extends Component {
    id = React.createRef();
    state = {msg:''};
    DeleteEmployeeById() {
        var id=Number(this.id.current.value);
        var url=`http://localhost:3001/event/${id}`;
        fetch(url,{
            method:"DELETE",
        }).then(()=> this.setState({msg:"Row Delete Successfully"}))
        .catch( error => this.setState({msg:error}));
    }
    render() {
        return (
            <div className='container mb-3'>
                <h2>Detele Event</h2>
                <div class="mb-3 col-sm-3 mx-3">
                <input className="form-control " type="number" placeholder="Event Id" ref={this.id}/>
                </div>
                <button className="btn btn-danger mx-3" onClick={()=>this.DeleteEmployeeById()}>Delete</button>
            
                {this.state.msg}
            </div>
        )
    }
}
export default DeleteEvent;