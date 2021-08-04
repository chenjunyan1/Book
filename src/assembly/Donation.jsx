import React, {Component} from "react"


// var a = 0;
//本地储存，1变2 2变1函数





export default class Donation extends Component{
    constructor(props){
        super(props);

        // super();
        this.state = {name:'Hello world!',
        asd:0,
            };
        // this.state.asd = 0;
        // this.state = {value: 'coconut'};
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.onClick = this.handleClick.bind(this);
      }

      handleClick(e) {
        e.preventDefault();
        // console.log('链接被点击');
        this.setState({
            asd:this.state.asd+1,
        });
        // console.log();
        // this.state.asd = localStorage.clickcountq;
        // console.log(localStorage.clickcountq)
        console.log(this.state.asd);
      }
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     // alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    //     console.log(this.state.value)
    //   }
    

    render(){
        // this.state.asd = as;

        return(
            
            <div>
                <img src="Img/mang.svg" width="100%" />
                <a href="#" onClick={this.onClick}>点我{this.state.name}{this.state.asd}</a>
            </div>
        )
    }
}   