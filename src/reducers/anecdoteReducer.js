import anecdoteService from '../services/anecdotes'
const sortByVotes = (anecdotes) => {
  return anecdotes.sort((a, b) => a.votes < b.votes)
}

export const voteFor = (id) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}

export const createAnecdote = (anecdote) => {
  const newAnecdote = {
    type: 'NEW_ANECDOTE',
    payload: anecdote
  }

  return newAnecdote
}

export const setAnecdotes = (anecdotes) => {
  const allAnecdotes = {
    type: 'SET_ANECDOTES',
    payload: anecdotes
  }

  return allAnecdotes
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()

    dispatch(setAnecdotes(anecdotes))
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
