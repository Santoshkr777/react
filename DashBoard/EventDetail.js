import React, { Component } from 'react'

class EventDetail extends Component {
    id = React.createRef();
    state = { event: {} };
    getEmployeeById() {
        var id = this.id.current.value;
        var url = `http://localhost:3001/event/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ event: response }))
            .catch(error => this.setState({ error: error }));
    }
    render() {
        return (
            <div className='container'>
                <h2> Employee Detail </h2>
                <div className="card mx-3 my-3 container">
                    <div className="card-body">
                        <div className='row g-3'>
                            <div className="col-auto">
                                <p class='my-2'>Enter Id : </p></div>
                            <div class="col-auto">
                                <input type="number" class="form-control" ref={this.id}></input>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-primary mb-3 mx-2" onClick={() => this.getEmployeeById()}>Detail</button></div>
                        </div>
                        <h5 className="card-title">{this.state.event.eventName}</h5>
                        <h6>{this.state.event.Date}</h6>
                        <p className="card-text">{this.state.event.detail}</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default EventDetail;
