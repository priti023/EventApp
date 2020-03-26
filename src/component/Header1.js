import React from 'react';

class  Header1 extends React.Component  {
  datasubmit() {
    // alert("data is submitted successfully!");
    console.log("data is submitted successfully!")
  }
    render(){
  return (
    <div>
        <h1>Header 323 Page</h1>
       <input placeholder="Please enter your first name"></input><br></br>
       <input placeholder="Please enter your Last name"></input><br></br>
       <input placeholder="Please enter your EmailId"></input><br></br>
       <input placeholder="Please enter your Password"></input><br></br>
       <button onClick={this.getData}>Submit</button>
    </div>
  );
}
componentWillMount() {
  this.getData()
}
async  getData() {
 var data= fetch('http://localhost:5000/api/login',
   {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({"userName":"amit@gmail.com" , "password":"amit@123"}),
})

console.log(await (await data).body);
  }

  
}

export default Header1;