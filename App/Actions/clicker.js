import Immutable from 'immutable'
import { Actions } from 'tictail-tide'

class Clicker extends Actions {

  increment () {
    const value = this.get('clicker')
    this.mutate('clicker', value + 1)
  }

  decrement () {
    const value = this.get('clicker')
    this.mutate('clicker', value - 1)
  }

  /*
  setTodoInputText(text) {
    this.mutate('todoInputText', text)
  }

  addTodo() {
    const title = this.get('todoInputText')
    if (title) {
      const item = Immutable.fromJS({
        id: uuid.v4(),
        completed: false,
        title: title.trim(),
      })

      this.mutate(['todos', item.get('id')], item)
      this.mutate('todoInputText', '')
    }
  }*/
}

export default Clicker