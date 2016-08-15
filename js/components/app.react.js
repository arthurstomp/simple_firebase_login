var React = require('react')
var UserStore = require('../stores/user_store.js')

/**
 * Retrieve the current User data from the UserStore
 */
function getUserState () {
  return {
    allTodos: UserStore.getAll(),
    areAllComplete: UserStore.areAllComplete()
  }
}

var App = React.createClass({

  getInitialState: function () {
    return getUserState()
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange)
  },

  /**
   * @return {object}
   */
  render: function () {
    return (
      <div>
        App!!!!
      </div>
    )
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function () {
    this.setState(getUserState())
  }

})

module.exports = App
