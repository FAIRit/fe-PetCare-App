import FileUploader from "react-firebase-file-uploader";
import React, { Component } from 'react';
import firebase from 'firebase';



class FilesUploader extends Component {


  state = {
    image: '',
    imageURL: '',
    progress: 0,
    updateLink:''
  }


  handleUploadStart = () => {

    this.setState({
      progress: 0
    })
  }
  
  
  handleUploadSuccess = filename => {
    this.setState({
      image: filename,
      progress: 100
    })


    firebase.storage().ref('avatars').child(filename).getDownloadURL()
      .then(url => this.setState({
        imageURL: url
      }))
  }

   linkUploader = ({updateLink}) => {
    onUploadSuccess = () => {
        updateLink()
    }
  }


  render() {
  
    return (
      <div className="App">

        <FileUploader
          accept="image/*"
          name='image'
          storageRef={firebase.storage().ref('avatars')}
          onUploadStart={this.handleUploadStart}
          onUploadSuccess={this.handleUploadSuccess}
        />

<div>
{this.state.imageURL}
<br/>
<a href={this.state.imageURL}target="_blank">Link</a>
</div>
<button onClick={this.props.linkUploader}>Pass the file</button>

      </div>
      );
  };
}

export default FilesUploader;