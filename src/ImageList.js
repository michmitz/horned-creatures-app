import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (
            <div> {
                this.props.images.map((image) => <ImageItem key={image.description} image={image}/>)
            }
            </div>
        )
    }
}

