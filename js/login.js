var React = require('react')
var ReactDOM = require('react-dom')
var LoginForm = require('./login_form.js')
var firebase = require('firebase')

var config = {
  // Initialize Firebase
  apiKey: 'AIzaSyApoKXXv-4K3bYm0yaHVBaTCH_YvHmBKVE',
  authDomain: 'test-2d634.firebaseapp.com',
  databaseURL: 'https://test-2d634.firebaseio.com',
  storageBucket: 'test-2d634.appspot.com'
}
firebase.initializeApp(config)

var LoginBox = React.createClass({
  render: function () {
    return (
      <div className='commentBox'>
        <h1>Login Bitch!</h1>
          Fuck yeahh!! Grunt!!
        <LoginForm />
      </div>
    )
  }
})

ReactDOM.render(
  <LoginBox />,
  document.getElementById('app')
)
