import React from 'react'
import img1 from "@src/assets/img/WechatIMG3.jpeg"
import img2 from "@src/assets/img/WechatIMG4.jpeg"

export default class AddBlogPage extends React.Component {
    render(){
        return (
            <div>
                <p>AddBlogPage</p>
                <img width={200} src={img1} alt="2" />
                <img width={200} src={img2} alt="" />
            </div>
        )
    }
}
