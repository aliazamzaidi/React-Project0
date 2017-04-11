import React from 'react';
import * as firebase from 'firebase';

export default class Needer extends React.Component{
    constructor(){
        super();
        this.submit = this.submit.bind(this); 
    }
    submit(){
        let bloodGroup = this.refs.bloodGroup.value;
        firebase.database().ref('/users/' + bloodGroup).once('value').then(function(snapshot) {
         var username = snapshot.val();
        //  console.log(username);
         let arr = [];
         for (var a in username){
             ``
            // arr.push(username[a])
         }
         console.log(arr)
         arr.map((v,i)=>{
         
         })
        // ...
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