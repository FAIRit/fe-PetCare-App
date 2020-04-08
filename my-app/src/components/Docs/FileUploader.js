import FileUploader from "react-firebase-file-uploader";
import React, {Component} from 'react';
import firebase from 'firebase';



class file extends Component {

  state = {
    image: '',
    imageURL: '',
    progress: 0
  }


  handleUploadStart = () => {

    this.setState({
      progress: 0
    })
  }

  handleUploadSuccess = filename => {
    this.setState ({
      image: filename,
      progress: 100
    })

    firebase.storage().ref('avatars').child(filename).getDownloadURL()
    .then(url => this.setState({
      imageURL: url
    }))
  }



  render() {

    console.log("this.state", this.state)
    console.log("this.state.imageURL",this.state.imageURL)
  return (
    <div className="App">

      <FileUploader  
      accept="image/*"
      name='image'
      storageRef={firebase.storage().ref('avatars')}
      onUploadStart = {this.handleUploadStart}
      onUploadSuccess = {this.handleUploadSuccess}
      />

<div>
{this.state.imageURL}  <a href={this.state.imageURL}>Link</a>

</div>



    </div>
  );
};
  }
export default file;