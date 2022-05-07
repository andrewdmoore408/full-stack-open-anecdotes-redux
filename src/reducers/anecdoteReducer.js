import anecdoteService from '../services/anecdotes'

const sortByVotes = (anecdotes) => {
  return anecdotes.sort((a, b) => a.votes < b.votes)
}

const addVote = ({ id }) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}

const addAnecdote = (anecdote) => {
  return { type: 'NEW_ANECDOTE', payload: anecdote }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.newAnecdote({ content, })

    dispatch(addAnecdote(newAnecdote))
  }
}

export const setAnecdotes = (anecdotes) => {
  const allAnecdotes = {
    type: 'SET_ANECDOTES',
    payload: sortByVotes(anecdotes),
  }

  return allAnecdotes
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()

    dispatch(setAnecdotes(anecdotes))
  }
}

export const voteFor = (id) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.increaseVotes(id)

    dispatch(addVote(updatedAnecdote))
  }
}

const initialState = []

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'NEW_ANECDOTE': {
      return sortByVotes([...state, action.payload])
    }
    case 'SET_ANECDOTES': {
      return action.payload
    }
    case 'VOTE': {
      const id = action.payload.id

      const anecdoteToUpdate = state.find(anecdote => anecdote.id === id)
      const updated = { ...anecdoteToUpdate }
      updated.votes += 1

      return sortByVotes(state.map(anecdote => anecdote === anecdoteToUpdate ? updated : anecdote))
    }
    default:
      return state
  }
}

export default anecdoteReducer
