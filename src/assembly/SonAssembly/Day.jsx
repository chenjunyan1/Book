import React, { Component } from 'react';
import '../../CSS/Day.css';
export default class Day extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // let background = {
        //     backgroundImage: 'url(Img_day/HappyEveryDay.svg)',
        //     backgroundRepeat:'round',
        // }
        return (
            <div className="waikuang" style={this.props.color}>
                <div className="riji" >
                    <div className="shang">
                        <div>
                            <div>&emsp;{this.props.time}</div>
                        </div>
                        <div>
                            <img className="huapen" src="Img_day/huapen.svg" alt="Flowerpot" />
                        </div>
                    </div>
                    <div className="xia" style={this.props.font_color}>
                        <p>
                            {this.props.content}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
