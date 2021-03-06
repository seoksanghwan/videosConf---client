import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from "react-router-dom";
import Main from './Main.jsx';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Rooms from './Rooms.jsx';
import RoomsDetails from './RoomsDetails.jsx';
import Warning from './Warning.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);
    window.onpopstate = e => {
      this.props.popClose();
      this.disconnectSet();
    }
  }

  componentDidUpdate() {
    if (!this.props.location.pathname.split('/rooms/')[1]) {
      this.disconnectSet();
    } else {
      this.props.chatRoomUsing(this.props.isroom, this.props.inroom, this.props.peers);
    }
  }

  disconnectSet() {
    this.props.webrtc.connection.disconnect();
    this.props.webrtc.stopLocalVideo();
    this.props.webrtc.leaveRoom();
  }

  disconnect() {
    this.props.history.push('/rooms');
    this.props.alertMessageChange();
    this.props.popClose();
  }

  render() {
    const {
      isLoggedIn,
      inputRef,
      goingRef,
      items,
      isroom,
      init,
      peers,
      inroom,
      webrtc,
      saveFormData,
      AddpeerVideo,
      joinChat,
      startLoclaVideo,
      handleSelfMute,
      goingChannel,
      passRef,
      passCheckRef,
      passwordCheck,
      pass,
      mute,
      popopen,
      popEvent,
      popClose,
      focustitle,
      inputCancel,
      alertMessage,
      spinner,
      alertBoxBottom,
      alertColor,
      channelAlertMessage,
      alertMessageFormat,
      onLogoutButtonClick,
      onLoginButtonClick,
      signAlert,
      loginpopEvent,
      loggedPopUp,
      deleteAelrt,
      roomDeletePop,
      gochnanelRoom,
      delPopClose,
      roomDelete,
      pageGoback,
      pageReturn,
      validityCheck,
      checker,
      fetchMoreData } = this.props;
    return (
      <div id="app" className="container">
        <Navbar
          items={items}
          loginpopEvent={loginpopEvent}
          loggedPopUp={loggedPopUp}
          isLoggedIn={isLoggedIn}
          signAlert={signAlert}
          onLoginButtonClick={onLoginButtonClick}
          onLogoutButtonClick={onLogoutButtonClick}
          alertMessageFormat={alertMessageFormat}
          alertBoxBottom={alertBoxBottom}
          popEvent={popEvent}
          popClose={popClose}
          popopen={popopen}
        />
        <Switch>
          <Route exact path="/" render={props => {
            return (
              <Main
                {...props}
                spinner={spinner}
                isLoggedIn={isLoggedIn}
                saveFormData={saveFormData}
                inputRef={inputRef}
                passRef={passRef}
                pass={pass}
                popEvent={popEvent}
                popClose={popClose}
                popopen={popopen}
                passwordCheck={passwordCheck}
                passCheckRef={passCheckRef}
                focustitle={focustitle}
                alertMessage={alertMessage}
                alertBoxBottom={alertBoxBottom}
                alertColor={alertColor}
                channelAlertMessage={channelAlertMessage}
                gochnanelRoom={gochnanelRoom}
              />
            );
          }} />
          <Route exact path="/about" render={props => {
            return (
              <About
                {...props}
                spinner={spinner}
                goingRef={goingRef}
                goingChannel={goingChannel}
                pass={pass}
                channelAlertMessage={channelAlertMessage}
                popEvent={popEvent}
                popClose={popClose}
                popopen={popopen}
                passwordCheck={passwordCheck}
                passCheckRef={passCheckRef}
                focustitle={focustitle}
                inputCancel={inputCancel}
                alertMessage={alertMessage}
                alertBoxBottom={alertBoxBottom}
                alertColor={alertColor}
                gochnanelRoom={gochnanelRoom}
              />
            );
          }} />
          <Route exact path="/rooms" render={props => {
            if (isLoggedIn) {
              return (
                <Rooms
                  checker={checker}
                  spinner={spinner}
                  popClose={popClose}
                  popopen={popopen}
                  pass={pass}
                  items={items}
                  isroom={isroom}
                  roomDelete={roomDelete}
                  passCheckRef={passCheckRef}
                  passwordCheck={passwordCheck}
                  popEvent={popEvent}
                  focustitle={focustitle}
                  inputCancel={inputCancel}
                  alertMessage={alertMessage}
                  alertBoxBottom={alertBoxBottom}
                  alertColor={alertColor}
                  deleteAelrt={deleteAelrt}
                  roomDeletePop={roomDeletePop}
                  gochnanelRoom={gochnanelRoom}
                  delPopClose={delPopClose}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }} />
          <Route exact path="/rooms/:room_name" render={props => {
            if (isLoggedIn) {
              if (inroom) {
                return (
                  <RoomsDetails
                    {...props}
                    init={init}
                    email={items.name}
                    url={items.url}
                    peers={peers}
                    webrtc={webrtc}
                    inroom={inroom}
                    isroom={isroom}
                    startLoclaVideo={startLoclaVideo}
                    AddpeerVideo={AddpeerVideo}
                    joinChat={joinChat}
                    mute={mute}
                    pass={pass}
                    disconnect={this.disconnect.bind(this)}
                    handleSelfMute={handleSelfMute}
                    localref={(vid) => this.localVideo = vid}
                  />
                );
              } else {
                return <Redirect to="/warning" />;
              }
            } else {
              return <Redirect to="/" />;
            }

          }} />
          <Route path="/warning" render={props => (<Warning {...props} pageGoback={pageGoback} pageReturn={pageReturn} popClose={popClose} />)} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <footer>
          <p>COPYRIGHT@VIDEOS.SEOKSANGHWAN ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    );
  };
};
