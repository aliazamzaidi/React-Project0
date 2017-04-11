import React from 'react';
import * as firebase from 'firebase';

export default class Doner extends React.Component {
     submit(){
            let name = this.refs.name.value;
            let number = this.refs.number.value;
            let bloodGroup = this.refs.donerBloodGroup.value;
            console.log(name, number, bloodGroup);

            //Firebase Coding
            firebase.database().ref('users/').push({
                name: name,
                number: number,
                bloodGroup: bloodGroup
            })

        }
    render() {
        return (
           <div style={{margin:'0px 3.6em'}}>
               <h5>Doner</h5>
                    <input type="text" placeholder='Your Name' ref='name'/>
                    <input type="number" placeholder='Your Phone Number' ref='number'/>
                    <input type="text" placeholder='Enter Your bloodGroup' ref='donerBloodGroup'/>
                   <button className='btn blue' onClick={this.submit.bind(this)}>Submit</button>
           </div>
        )
    }
}