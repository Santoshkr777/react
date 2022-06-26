import React, { Component } from 'react'

class CreateEvent extends Component {
    eventName=React.createRef();
    Date=React.createRef();
    detail=React.createRef();
    state={msg:''}
    Create(){
        var url=`http://localhost:3001/event`;
        var e={
            eventName:this.eventName.current.value,
            Date:this.Date.current.value,
            detail:this.detail.current.value,
        };
        fetch(url,{
            method:"POST",
            body: JSON.stringify(e),
            headers: {"content-type":"application/json"}
        }).then(()=> this.setState({msg:"Row Added Successfully"}))
        .catch( error => this.setState({msg:error}));
    }
    render() {
        return (
            <div className="container">
                <h2>Create Event</h2>
                <div class="mb-2 col-sm-3 mx-3">
                <input className="form-control" type="text" placeholder="Event Name" ref={this.eventName}/></div>
                <div class="mb-2 col-sm-3 mx-3">
                <input className="form-control" type="text" placeholder="Enter Date(DD/MM/YYYY)" ref={this.Date}/></div> 
                <div class="mb-2 col-sm-3 mx-3">
                <textarea className="form-control" ref={this.detail} placeholder='Description' rows="3"></textarea></div>
                <button className="btn btn-primary mx-3" onClick={()=>this.Create()}>Add</button>
                {this.state.msg}
            </div>
        )
    }
}
export default CreateEvent;