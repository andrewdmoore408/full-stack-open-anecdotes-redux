import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  let anecdotes = useSelector(state => state.anecdotes)
  const filterText = useSelector(state => state.filter)
  const filterActive = filterText !== '' ? true : false

  const vote = (id) => {
    dispatch(voteFor(id))
    dispatch(setNotification(`You voted "${anecdotes.find(anecdote => anecdote.id === id).content}"`, 5))
  }

  if (filterActive) {
    anecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filterText.toLowerCase()))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
