import React, { Component } from 'react';
import './index.less';
import img1 from '@src/assets/img/WechatIMG1.jpeg';
import img2 from '@src/assets/img/WechatIMG9.jpeg';
import img3 from "@src/assets/img/WechatIMG10.jpeg"

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <p>
                    hello world
                    <br/>环境：{process.env.NODE_ENV}
                </p>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
            </div>
        )
    }
}

export default Home;
