import React, {Component} from "react"


// var a = 0;
//本地储存，1变2 2变1函数
function handleClick(e) {
    e.preventDefault();
    // console.log('链接被点击');
    if (localStorage.clickcountq) {
        if (localStorage.clickcountq == 1) {
            localStorage.clickcountq = 2;
        }else{
            localStorage.clickcountq = 1;
        }
        // localStorage.clickcountq = Number(localStorage.clickcountq)+1;
    } else {
        localStorage.clickcountq = 1;
    }
    return localStorage.clickcountq;
    // console.log(localStorage.clickcountq)
  }



export default class Donation extends Component{
    constructor(props){
        super(props);

        // super();
        // this.state = {name:'Hello world!'};
        this.state = {value: 'coconut'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value)
      }
    

    render(){

        return(
            
            <div>
                <img src="Img/mang.svg" width="100%" />

               
                <a href="#" onClick={handleClick}>点我{this.state.name}</a>

            </div>
        )
    }
}   