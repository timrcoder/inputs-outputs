import React from 'react';
import ReactDOM from 'react-dom';
 class Greeting extends React.Component {

    state={}

    setValue(e){
        this.setState({description: e.target.value})
    }
    
    displayGreeting() {
        this.setState({output: this.state.description})
    }


     render() {
         return(
             <div>

                <input type="text" 
                placeholder="greeting" 
                name="description"
                onChange={(e)=> this.setValue(e)}/>

                <button onClick={()=>this.displayGreeting()}>Submit</button>
                
                <h5>{this.state.output}</h5>

             </div>
         )
     }
 }

 ReactDOM.render(
     <Greeting/>,
     document.getElementById('root')
 )