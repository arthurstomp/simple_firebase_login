var React = require('react')
var firebase = require('firebase')

var LoginForm = React.createClass({
  getInitialState: function () {
    return {
      email: '',
      password: ''
    }
  },
  handleEmail: function (e) {
    var email = e.target.value
    this.setState({email: email})
    console.log(email)
  },
  handlePassword: function (e) {
    var pw = e.target.value
    this.setState({password: pw})
    console.log(pw)
  },
  handleLogin: function (e) {
    e.preventDefault()
    console.log('login!!')
    var email = this.state.email.trim()
    var pw = this.state.password.trim()
    if (!email || !pw) {
      return
    }
    var signInPromise = firebase.auth().signInWithEmailAndPassword(email, pw)
    signInPromise.then(function () {
      console.log('User is on!')
    }, function (error) {
      console.log(error)
    })
  },
  render: function () {
    return (
      <form className='commentForm' onSubmit={this.handleLogin}>
        <input type='text' placeholder='Your e-mail' onChange={this.handleEmail} /><br></br>
        <input type='password' onChange={this.handlePassword} /><br></br>
        <input type='submit' value='Login' />
      </form>
    )
  }
})

module.exports = LoginForm
