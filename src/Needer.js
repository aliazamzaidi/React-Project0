import React from 'react';
import * as firebase from 'firebase';

export default class Needer extends React.Component{
    constructor(){
        super();
        this.submit = this.submit.bind(this);
        this.state = ({
            name: '',
            bloodGroup: '',
            number: ''
        }) 
    }
    submit(){
        let bloodGroup = this.refs.bloodGroup.value;
        firebase.database().ref('/users/' + bloodGroup).once('value').then(function(snapshot) {
         var username = snapshot.val();
        //  console.log(username);
         let allValueOfObject = Object.values(username)
         console.log(allValueOfObject[0].bloodGroup); // value from object, just a random check
         console.log(Object.keys(allValueOfObject).length); // length of an array, also a random check
         let arr = [];  
         for (var i=0;i<=Object.keys(allValueOfObject).length-1;i++){
             arr.push(allValueOfObject[i]);
         }
         console.log(arr)
         /////Page Change to 

    });

    }
    render(){
        return (
            <div style={{margin:'0px 3.6em'}}>
           <h5>Needer</h5>
                    <input type="text" placeholder='Enter bloodGroup You Need' ref='bloodGroup'/>
                   <button className='btn yellow' onClick={this.submit}>Submit</button>
            </div>
        )
    }
}