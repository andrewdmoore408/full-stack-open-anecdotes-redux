import { useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdotes'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleNewAnecdote = async (event) => {
    event.preventDefault()

    const content = event.target.content.value
    event.target.content.value = ''

    const newAnecdote = await anecdoteService.newAnecdote({ content, })

    dispatch(createAnecdote(newAnecdote))
    dispatch(setNotification(`You created "${content}"`))
    setTimeout(() => dispatch(removeNotification()), 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div>
          <input
            type="text"
            name="content"
          />
        </div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
