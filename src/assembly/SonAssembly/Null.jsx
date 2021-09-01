import React, { Component } from 'react'
import Date from'../../date.json'
export default class Null extends Component {
    render() {
        let a = {
            height:'calc(100vh - 50px)'
        }
        let b = {
            width:'100%',
            height:'calc(100vh - 50px)',
            justifyContent:'center',
            alignContent:'center',
        }
        return (
            <div style={a}>
                <img style={b} src="Img/Img_404.svg" alt="" />
                {/* {Date.a[1]} */}
            </div>
        )
    }
}
