var AppDispatcher = require('../dispatcher/app_dispatcher.js')
var EventEmitter = require('events').EventEmitter
var UserConstants = require('../constants/user_constants.js')
var assign = require('object-assign')

var CHANGE_EVENT = 'change'

/**
 * Create a TODO item.
 * @param {string} text The content of the TODO
 */
function create (text) {
}

/**
 * Delete a TODO item.
 * @param {string} id
 */
function destroy (id) {
}

var TodoStore = assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    var action = payload.action
    var text

    switch (action.actionType) {
      case UserConstants.TODO_CREATE:
        text = action.text.trim()
        if (text !== '') {
          create(text)
          TodoStore.emitChange()
        }
        break

      case UserConstants.TODO_DESTROY:
        destroy(action.id)
        TodoStore.emitChange()
        break

      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true // No errors. Needed by promise in Dispatcher.
  })

})

module.exports = TodoStore
