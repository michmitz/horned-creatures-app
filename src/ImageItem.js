import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="image-container">
                <p className="image-title">{this.props.image.title}</p>
                <img src={this.props.image.url} alt=''/>
                <p>{this.props.image.description}</p>
                
            </div>
        )
    }
}