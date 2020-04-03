import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            eventType: '',
            eventLocation:'',
            description:'',
            startDate:'',
            endDate:''
        //   isregistration: false
        };
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="row " >
                        <div className="col-lg-12 offset-md-3 ">
                        <h2 className="login1" >Register Your Event</h2>
                            <Form >
                                <div className="form-group">
                                    <label>Event Name</label><br></br>
                                    <input type="text"  placeholder="Enter Your Event Name" name='eventName'
                        value={this.state.eventName}
                        onChange={e => this.handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Event Type</label><br></br>
                                    <input type="text" placeholder="Enter Your Event Type" name='eventType'
                        value={this.state.eventType}
                        onChange={e => this.handleChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <label>Event Location</label><br></br>
                                    <input type="text" placeholder="Enter Your Event Location" name='eventLocation'
                        value={this.state.eventLocation}
                        onChange={e => this.handleChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <label>Start Date</label><br></br>
                                    <input type="date" name='startDate'
                        value={this.state.startDate}
                        onChange={e => this.handleChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <label>End Date</label><br></br>
                                    <input type="date" name='endDate'
                        value={this.state.endDate}
                        onChange={e => this.handleChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <label>Description</label><br></br>
                                    <textarea  name='description'
                        value={this.state.description}
                        onChange={e => this.handleChange(e)}/>
                                </div>
                                <Button variant="primary" type="submit" className="submitbutton" onClick={(e) => this.getData(e)}> Submit</Button>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
    componentWillMount() {
        // this.getData()
      }
      async getData(e) {
        e.preventDefault();
        const eventdata = {
            eventName: this.state.eventName,
            eventType: this.state.eventType,
            eventLocation:this.state.eventLocation,
            startDate:this.state.startDate,
          endDate:this.state.endDate,
          description:this.state.description
         
        }
       var response = await axios.post('https://powerful-inlet-21450.herokuapp.com/eventsapi/event',
       eventdata,
        { headers: { 'Content-Type': 'application/json' } }
      )
        console.log( response.data)
        if(response.data.status=='success'){
          console.log(response)
        //     this.setState({
        //       isregistration:true
        //   });     
        }else{
          alert(response.data.msg)
          console.log(Error);
        }
      }

}

export default Events;