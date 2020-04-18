import FileUploader from "react-firebase-file-uploader";
import React, { Component } from 'react';
import firebase from 'firebase';


class FilesUploader extends Component {

  state = {
    image: '',
    imageURL: '',
    progress: '',
    updateLink:''
  }

  handleUploadStart = () => {

    this.setState({
      progress: "0%"
    })
  }
  
  handleUploadSuccess = filename => {
    this.setState({
      image: filename,
      progress: "100%"
    })


    firebase.storage().ref('avatars').child(filename).getDownloadURL()
    .then(url => {
      this.setState({
        imageURL: url
      });
      this.props.fileSaved(url);
    })}

handleProgress=progress=>{
  this.setState({
  progress:progress
})
}
  render() {
  
    return (
      <div class="fileuploader">
        <FileUploader
          accept="image/*"
          name='image'
          storageRef={firebase.storage().ref('avatars')}
          onUploadStart={this.handleUploadStart}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
        />
<br/>
<p>{this.state.progress}</p>
<div>
<a href={this.state.imageURL}target="_blank">{this.state.imageURL}</a>

</div>

      </div>
      );
  };
}

export default FilesUploader;