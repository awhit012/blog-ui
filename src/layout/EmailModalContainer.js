import React from 'react';
import Modal from 'react-responsive-modal';
import Iframe from 'react-iframe'

export default class EmailModalContainer extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  constructor() {
    super();
    this.initializeEmailForm();
  }

  initializeEmailForm() {
    if (!this.isSubscribed()) {
      setTimeout(() => {
        this.onOpenModal()
      }, 30000);
    }
  }
  
  isSubscribed() {
    console.log(!!localStorage.getItem("isSubscribed"))
    return !!localStorage.getItem("isSubscribed"); 
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Join our mailing list</h2>
          <Iframe url="https://forms.aweber.com/form/50/1430675650.html"
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>
        </Modal>
      </div>
    );
  }
}