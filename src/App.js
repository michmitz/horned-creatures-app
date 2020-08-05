import React from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';

// const options = [
//   'narwhal',
//   'rhino',
//   'unicorn',
//   'unilego',
//   'triceratops',
//   'markhor',
//   'mouflon',
//   'addax',
//   'chameleon',
//   'lizard',
//   'dragon'
// ]


class App extends React.Component {
  state = {
    filter: ''
  }

  handleKeyword = (e) => {
    const keyword = e.target.value;

    this.setState({ filter: keyword })
  }

  render() {
    const filteredImages = images.filter(image => image.keyword === this.state.filter)

  return (
      <div className="App">
        <Header/>

        <select onChange={this.handleKeyword} name="images">
                {
                  images.map(image => <option key={image.url} value={image.keyword}>{image.title}</option>)
                }
            </select>
          {
            filteredImages.map(image => <p>{image.title}</p>)
          }

        <ImageList images={filteredImages}/>
      </div>
    );
  }
}

export default App;
