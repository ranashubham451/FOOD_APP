import React   from "react"

class UserClass extends React.Component {
    // Constructor
     constructor(props){
        super(props);
        this.state={
            // count:0,
            userInfo:{
                name:"Dummy Data",
                location:"Default",
                url:"https://shubham.com"
            }
       
        }
        console.log(props)
        console.log("Constructor Called")
     }
      async componentDidMount(){
        const data =await fetch("https://api.github.com/users/akshaymarch7");
        const Json =await data.json();
        this.setState({
            userInfo:Json,
        })
        // console.log(Json)
        console.log("Cooponent Did Mount Called")
     }
     componentDidUpdate(){
        console.log("Component Did Update Called")
     }
    componentWillUnmount(){
        console.log("Component Will Unmount called")
    }
    render() {
        // const {name}=this.props;
        
        console.log("Render Called")
        return (
            <div className="user-card">
                {/* <h1>Count :{count}</h1>
             <button onClick={()=>{
                // never Direectly Updaet the satte variable 
                this.setState({0
                    count:this.state.count+1
                })
             }}>Increment</button> */}
                <h2> Name : {this.state.userInfo.name} </h2>
                <h3>Location :  {this.state.userInfo.location} </h3>
                <h4>Contact :  {this.state.userInfo.url} </h4>
            </div>
        )
    }
}
export default UserClass;