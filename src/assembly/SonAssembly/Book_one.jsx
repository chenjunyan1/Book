import React, {Component} from "react";
import '../../CSS/Book_one.css';
export default class Book_one extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="zujian" style={this.props.color}>
                <div className="shang">
                    <div className="test_biaoti">《{this.props.name}》</div>
                </div>
                <div className="xia" >
                    {/* <div className="img-box" style={this.props.color_2}>
                        <img className="img_huiben" src={this.props.img_link}/>
                    </div> */}
                    <div>
                        {/* <div className="test_wenben">ID:[{this.props.renqun}]</div> */}
                        <div className="test_wenben">类型:{this.props.leixing}</div>
                        <div className="test_wenben test_zuozhe">作者:{this.props.zuozhe}</div>
                    </div>
                </div>
                <div className="tuowei">
                    <img className="img_tuowei" src="Img/shuben.svg"/>
                </div>
            </div>
        )
    }
}