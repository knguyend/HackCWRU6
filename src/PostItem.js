import React from 'react';
import styled from 'styled-components';

const firebase = window.firebase;

const Div = styled.div`
  position: absolute;
  height: 80%;
  width: 80%;
  background: white;
  border: 3px solid red;
  border-radius: 5px;
  top: 25px;
  left: 10%;
  text-align: center;

  button {
    margin: 15px;
  }

  select {
    display: block;
  }
`;

class PostItem extends React.Component {
  state = {
    itemName: '',
    itemDesc: '',
    itemCondition: '',
    phoneNumber: '',
    selectedFile: null,
    photoURL: ''
  };

  photoUploadHandler = () => {
    var metadata = {
      contentType: 'image/jpeg'
    };
    var storageRef = firebase.storage().ref();
        // Upload file and metadata to the object 'images/mountains.jpg'
      var uploadTask = storageRef.child(this.state.selectedFile.name).put(this.state.selectedFile, metadata);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, error => {
      
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
      
          case 'storage/canceled':
            // User canceled the upload
            break;
      
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL()
          .then(downloadURL => {
          console.log('File available at', downloadURL);
          let title = this.state.itemName, description = this.state.itemDesc, 
          condition = this.state.itemCondition, phoneNumber=this.state.phoneNumber;
          const firestore = firebase.firestore();
          firestore
              .collection('items')
              .add({
                title,
                description,
                condition,
                phoneNumber,
                photoURL: downloadURL
              });
        });
      });
  }

  handleChange = e => {
    const target = e.target.name;
    this.setState({ [target]: e.target.value });
  };


  handleSubmit = e => {
    e.preventDefault();
    this.photoUploadHandler();
    console.log(this.state.photoURL);
    this.props.closePopup(e);
  };

  handlePhotoChange = e => {
    this.setState({selectedFile: e.target.files[0]});
    console.log(this.state.selectedFile);
  }

  render() {
    return (
      <Div className="PostItem">
        <h2>Post an Item</h2>
        <form>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={this.state.itemName}
            onChange={this.handleChange}
          />
          <label htmlFor="itemName">Item Name</label>
          <br />
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <br />
          <select
            id="itemCondition"
            selected={this.state.itemCondition}
            onChange={this.handleChange}
          >
            <option value="new">Like New</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
          <label htmlFor="itemCondition">Item Condition</label>
          <br />
          <textarea
            name="itemDesc"
            id="itemDesc"
            cols="30"
            rows="10"
            value={this.state.itemDesc}
            onChange={this.handleChange}
          />
          <label htmlFor="itemDesc">Description</label>
          <br />
          <input type="file" name="pictureUpload" id="pictureUpload" onChange={this.handlePhotoChange} />
          <label htmlFor="pictureUpload" />
          <br />
          <br />
          <input type="submit" value="Post" onClick={this.handleSubmit} />
          <button onClick={this.props.closePopup}>Close Popup</button>
        </form>
      </Div>
    );
  }
}

export default PostItem;
