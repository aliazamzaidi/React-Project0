import React from "react"
import MainBar from './App-Bar'
// import SignInCard from './SignIn'
class Main extends React.Component{
    render(){
        return (
            <div>
                <MainBar />
                {this.props.children}
            </div>
        )
    }
}
export default Main