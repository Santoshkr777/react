import React from 'react';
class EditEvent extends React.Component{
    id= React.createRef();
    eventName= React.createRef();
    Date=React.createRef();
    detail=React.createRef();
    state={mgs:''};
    EditEvent(){
        var id=Number(this.id.current.value);
        var url=`http://localhost:3001/event/${id}`;
        var e={
            id:Number(this.id.current.value),
            eventName:this.eventName.current.value,
            Date:this.Date.current.value,
            detail:this.detail.current.value
        };
        fetch(url,{
            method:"PUT",
            body: JSON.stringify(e),
            headers: {"content-type":"application/json"}
        }).then(()=> this.setState({msg:"Row Edit Successfully"}))
        .catch( error => this.setState({msg:error}));
    }
        render(){
            return <div className='container'>
                
                <h2>Edit Event Detail</h2>
               <div class="col-sm-3 mx-3 my-3">
                    <input type="number" ref={this.id} class="form-control" placeholder="Enter ID"/></div>
                 <div class="col-sm-3 mx-3 my-3">
                    <input type="text" ref={this.eventName} class="form-control"  placeholder="Enter Name"/>
                 </div>
                 <div class="col-sm-3 mx-3 my-3">
                    <input type="text" ref={this.Date} class="form-control" placeholder="Enter Date"/>
                 </div>
                 <div class="mb-2 col-sm-3 mx-3">
                <textarea className="form-control" ref={this.detail} placeholder='Description' rows="3"></textarea></div>
                <div class="col-auto">
                <button  class="btn btn-primary mb-3 mx-3" onClick={()=>this.EditEvent()}>Edit</button></div>
                {this.state.msg}
                </div>
               
        }
}
export default EditEvent;