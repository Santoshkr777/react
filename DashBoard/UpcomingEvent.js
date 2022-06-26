import React, { Component } from 'react'

class UpcomingEvent extends Component {
    // state = {
    //     event: [
    //         { 'id': 1001, 'eventName': 'Birthday party', 'Date': '12/03/2021' },
    //         { 'id': 1002, 'eventName': 'EBM party', 'Date': '03/07/2021' },
    //     ]
    // }
    state = { event: [], error: '' }
    componentDidMount() {
        //this is a react life cycle hook method , will be called once Componentis successfully loaded
        var url = "http://localhost:3001/event";
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ event: response }))
            .catch(error => this.setState({ error: error }));
    }
    render() {
        return (
            <div>
                <h2>Upcoming Event List </h2>
                {this.state.event.map(e =>
                    <div className="card mx-3 my-3 container">
                        <div className="card-body">
                            <small>ID : {e.id}</small>
                            <h5 className="card-title">{e.eventName}</h5>
                            <h6>{e.Date}</h6>
                            <p className="card-text">{e.detail}</p>
                            <a href="#" className="btn btn-primary ">Edit</a>
                        </div>
                    </div>)}
                
            </div>
        )
    }
}
export default UpcomingEvent;