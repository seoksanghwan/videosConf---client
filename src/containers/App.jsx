import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import React, { Component } from 'react';
import { debounce } from "lodash";
import * as firebase from 'firebase';
import LioWebRTC from 'liowebrtc';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import createHistory from 'history/createBrowserHistory';
import {
  IS_LOGIN_USER,
  IS_LOGGED_IN_DATA,
  IS_LOGOUT_DATA,
  GET_ERRORS,
  ROOMS_DATA,
  CONNECTED_LOCAL,
  LOCAL_VIDEO,
  RTC_SETTING,
  ADD_MEDIA,
  REMOVE_VIDEO,
  READY_TO_CALL
} from '../actions';
import App from "../components/App.jsx";
import { refAs, refWith } from 'react-ref-helper';

let rtc;
const localHostIp = 'http://videos.ap-northeast-2.elasticbeanstalk.com/api/auth/';
const provider = new firebase.auth.GoogleAuthProvider();
const history = createHistory();

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  }
  else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

const mapStateToProps = state => ({
  items: state.items,
  isLoggedIn: state.isLoggedIn,
  error: state.error,
  isroom: state.isroom,
  isroom: state.isroom,
  peers: state.peers,
  id: state.id,
  webrtc: state.webrtc,
  localStream: state.localStream,
  ready: state.ready,
  func: state.func
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    loginUser: (user) => {
      firebase.auth().signInWithPopup(provider).then(result => {
        let token = result.credential.accessToken;
        let users = result.user;
        let loginUser = {
          uid: users.uid,
          name: users.displayName,
          url: users.photoURL,
          email: users.email
        }
        axios.post(`${localHostIp}login`, loginUser).then(res => {
          const { token } = res.data;
          setAuthToken(token);
          const decoded = jwt_decode(token);
          dispatch({
            type: IS_LOGIN_USER,
            data: decoded
          });
          localStorage.setItem('user', JSON.stringify(decoded));
        })
      }).catch(error => {
        dispatch({ type: GET_ERRORS, error });
      });
    },
    usingUserData: () => {
      let user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: IS_LOGGED_IN_DATA,
        data: user
      });
    },
    userlogout: debounce(() => {
      let userRemove = localStorage.removeItem('user');
      dispatch({
        type: IS_LOGOUT_DATA,
        data: userRemove
      });
    }, 1000),
    channelData: () => {
      axios.get(`http://videos.ap-northeast-2.elasticbeanstalk.com/`).then(({ data }) => {
        dispatch({
          type: ROOMS_DATA,
          data
        });
      }).catch((error) => {
        dispatch({ type: GET_ERRORS, error });
      });
    },
    init: (localele) => {
      let user = JSON.parse(localStorage.getItem('user'));
      let email = (user !== null) ? `${user.email},${user.url}` : 'Not user';
      rtc = new LioWebRTC({
        url: 'https://sm1.lio.app:443/',
        localVideoEl: '',
        dataOnly: false,
        network: {
          maxPeers: 8,
          minPeers: 4
        },
        debug: true,
        nick: email
      });
      rtc
        .on('connectionReady', (sessionId) => {
          dispatch({
            type: CONNECTED_LOCAL,
            sessionId
          });
        })
        .on('videoRemoved', (peer) => {
          dispatch({
            type: REMOVE_VIDEO,
            peer
          });
        });
      dispatch({ type: RTC_SETTING, payload: rtc });
    },
    startLoclaVideo: (localvideo) => {
      dispatch({ type: LOCAL_VIDEO, start: rtc.startLocalVideo() });
      if (localvideo) {
        rtc.config.localVideoEl = localvideo;
      } else {
        rtc.config.localVideoEl = '';
      }
    },
    AddpeerVideo: (targetremote) => {
      rtc.on('videoAdded', (stream, peer) => {
        if (targetremote) {
          dispatch({ type: ADD_MEDIA, peer });
          rtc.attachStream(stream, targetremote[peer.id], { autoplay: true });
        }
      })
    },
    joinChat: (roomname) => {
      rtc.on('readyToCall', () => {
        if (roomname) {
          dispatch({
            type: READY_TO_CALL,
            joinroom: rtc.joinRoom(roomname)
          });
        }
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withref: true })(App);