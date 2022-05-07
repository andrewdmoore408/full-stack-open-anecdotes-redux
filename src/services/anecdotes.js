import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)

  return response.data
}

const newAnecdote = async (newAnecdote) => {
  newAnecdote.votes = 0

  const createdResponse = await axios.post(baseUrl, newAnecdote)
  return createdResponse.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, newAnecdote }
