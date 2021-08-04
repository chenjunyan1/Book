// import React, {Component} from "react"
// import Day from ''
import '../CSS/Home.css';
import React, { Suspense, lazy, Component } from 'react';

const Day = lazy(() => import('./SonAssembly/Day'));

// localStorage.content_arr =[];
// let content_arr = [];


// localStorage.setItem('Day',JSON.stringify(neirong));
// let weekArray = JSON.parse(localStorage.getItem('Day'));
var neirong_arr = [];
var time_arr = [];
var color_arr = [];
// localStorage.neirong = "";
// localStorage.shijian = "";
var fontColor_arr = [];

//文字增强模式
function getRandomColor(){
    let rgb = [];
    for(let i=0;i<3;++i){
      let color = Math.floor(Math.random()*256);
      color = color.length == 1?'0'+color:color;
      rgb.push(color);
    }
    // fontColor_arr.push();
    //返回两个颜色rgb,arr[0]是颜色值，arr[1]是arr[0]颜色值的反差
    return ["rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")","rgb("+(255-rgb[0])+","+(255-rgb[1])+","+(255-rgb[2])+")"]
    // return '#' + rgb.join('');
  }
//将时间数据加工
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}
//获取当前时间
function time() {
    var today=new Date();
	var y = today.getFullYear();
	var a = today.getMonth() + 1;
	var b = today.getDate();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
    m=checkTime(m);
	s=checkTime(s);
    return y+"/"+a+"/"+b+"|"+h+":"+m+":"+s;
}

export default class Home extends Component{
    constructor(props) {
        super(props);
        //事件绑定
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();

        // this.props.form.resetFields();  

        if (this.state.value.length<=10 || this.state.value==neirong_arr[0] || this.state.value.length>=120) {
            alert('内容必须10个字符以上;内容不可以和上一次重复;日志内容不能超过120个字符;');
        }else{
            let color_arrs = getRandomColor();

            // time_arr.push(time());
            if (localStorage.shijian && localStorage.neirong && localStorage.yanse && localStorage.fontColor) {
                //如果之前存过就继续加
                localStorage.shijian += time()+"￥";
                this.state.value = this.state.value.replace(/￥/g,"$");
                localStorage.neirong += this.state.value+"￥";
                localStorage.yanse += color_arrs[0]+"￥";
                localStorage.fontColor += color_arrs[1]+"￥";
            }else{
                //第一次|初始化
                localStorage.shijian = time()+"￥";
                localStorage.neirong = this.state.value+"￥";
                localStorage.yanse = color_arrs[0]+"￥";
                localStorage.fontColor = color_arrs[1]+"￥";

            }

            //本地数据赋值给新的数据
            neirong_arr = localStorage.neirong;
            time_arr = localStorage.shijian;
            color_arr = localStorage.yanse;
            fontColor_arr = localStorage.fontColor;

            //将字符的最后一个￥删去
            neirong_arr = neirong_arr.substring(0, neirong_arr.length-1);
            time_arr = time_arr.substring(0, time_arr.length-1);
            color_arr = color_arr.substring(0, color_arr.length-1);
            fontColor_arr = fontColor_arr.substring(0, fontColor_arr.length-1);

            //以￥分割转化成数组并分割
            neirong_arr = neirong_arr.split("￥").reverse ();
            time_arr = time_arr.split("￥").reverse ();
            color_arr = color_arr.split("￥").reverse ();
            fontColor_arr = fontColor_arr.split("￥").reverse ();

            this.setState({
                value:"",
            });
            
            // this.state.value = "";
            // localStorage.clear();
            // neirong.push(this.state.value);
        }
        // this.state.value = '';
        // this.props.form.resetFields();
      }
    render(){
        // let a = this.state.value;
        return(
            <div className="Home">
                <div className="page_one">
                    <div>
                        <div className="chongxi_huibenguan">
                            崇西绘本馆
                        </div>
                        <img className="tushuguan" src="Img/tushu_logo_2.svg" alt="" />
                    </div>
                    
                </div>
                <div className="page_two">
                    <div className="huanying">Welcome to Chongxi Picture Book Museum</div>
                    <div>
                        <p>开放时间:</p>
                        <p>&emsp;09:00-16:30</p>
                        <p> &emsp;周一、周三、周四</p>
                    </div>
                    <div>
                        <p>最近活动:</p>
                        <p>&emsp;Time</p>
                        <p> &emsp;content</p>
                    </div>
                    <div className="chuangzao_img">
                        {/* <img className="chuangzao" src="Img/chuangzao.svg" alt="" /> */}
                    </div>
                    <div className="two">
                        <div>
                            <h1 className="chongwenriji">
                                崇文LOG
                            </h1>
                        </div>
                        <div>
                            <div>使用教程：</div>
                            <div>&emsp;输入超过10并不多于140个字符的日志 -&gt; click Enter key 或 click记录 -&gt; 即可生成所有日志卡片。</div>
                            <div>&emsp;每天可以在这里每天记录你的生活哦！该日志可永久保留，为保护你的隐私该日志仅你可见~</div>
                            <br />
                            <br />
                        </div>
                        <form className="jilu" onSubmit={this.handleSubmit}>
                            <div>
                                <input className="shuru" value={this.state.value}  onChange={this.handleChange} placeholder="来记录你的今日份log吧！" />
                                <input className="tijiao" type="submit" value="记录" />
                            </div>
                        </form>
                        <br />
                        <br />
                        <Suspense fallback={
                        <div>Loading...</div>}>
                            <div className="home_riji">
                                {neirong_arr.map((mingzi,index) => {
                                    return(
                                        <Day key={index} time={time_arr[index]} content={neirong_arr[index]} color={{backgroundColor:color_arr[index]}} font_color={{color:fontColor_arr[index]}}/>
                                )})}
                            </div>
                        </Suspense>
                        <div className="dilan">
                        </div>
                    </div>
                </div>
            </div>   
        )
    }   
}