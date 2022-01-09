import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      status: props.status,
    }

    this.activateEditMode = this.activateEditMode.bind(this);
    this.onBlurStatus = this.onBlurStatus.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  

  activateEditMode() {
    if (this.props.userId === this.props.myId) {
      this.setState({
        editMode: true,
      })
    }
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    })
  }

  onBlurStatus() {
    this.deactivateEditMode();
    this.props.setStatus(this.state.status);
  }

  onChangeStatus(text) {
    this.setState({
      status: text,
    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }


  render() {
    return (
      <>
        {
          this.state.editMode
            ? <input
              autoFocus={true}
              onBlur={this.onBlurStatus}
              onChange={(e) => this.onChangeStatus(e.target.value)} 
              type="text"
              value={this.state.status === null ? '' : this.state.status}
            />
            : <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
        }
      </>
    )
  }
}

export default ProfileStatus;