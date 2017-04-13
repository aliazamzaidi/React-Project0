import React from 'react';
import $ from 'jquery';
import dt from 'datatables.net';
import * as firebase from 'firebase';

class Table extends React.Component{
    constructor(){
        super();
        this.state = ({
            arr:[]
        })
    }
    componentWillMount(){
firebase.database().ref('users/').once('value', (data) => {
            var obj = data.val();
            console.log(obj)
            let array1 = Object.values(obj);
            console.log(array1)
            this.setState({
                arr: array1
            })
        })
    }




        // let bloodGroup = this.refs.bloodGroup.value;
    //     firebase.database().ref('/users/').once('value').then(function(snapshot) {
    //      var allDataFromFB = snapshot.val();
    //     //  console.log(allDataFromFB);
    //     //  var allDataIntoArray = Object.values(allDataFromFB);
    //     //  console.log(allDataIntoArray);
    //     //  var allDataIntoArray = Object.values(allDataIntoArray);
    //      let dbarray=[];
    //      for (var obj in allDataFromFB){
    //          dbarray.push(allDataFromFB[obj])
             
    //      }
    //      console.log(dbarray)
    //     //  this.setState({

    //     //  })
    //     });
     
    //      this.setState({
    //          arr:dbarray
    //      })
        
    // }
    componentDidMount(){
        $(document).ready(function () {
            $('#myTable').dataTable();
        });
    }
    render(){
         console.log(this.state.arr)
        return(
            
           
            <div style={{margin:'2em',border:'4px solid grey',borderTopLeftRadius:'3px',borderTopRightRadius:'3px',borderBottomLeftRadius:'7px',borderBottomRightRadius:'7px'}}>
                <table id='myTable'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>BloodGroup</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.state.arr.map((v,i)=>{
                           return(
                               <tr key={i}>
                                   <td >{v.name}</td>
                                    <td>{v.number}</td>
                                      <td>{v.bloodGroup}</td>

                               </tr>
                           )
                       })}
                       {/*<tr>
                           <td>ali</td>
                           <td>36</td>
                           <td>B+</td>
                       </tr>
                       <tr>
                           <td>ahmed</td>
                           <td>3426</td>
                           <td>B+</td>
                       </tr>
                       <tr>
                           <td>jameee</td>
                           <td>575</td>
                           <td>B+</td>
                       </tr>*/}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;