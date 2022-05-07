import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)

  return await response.data
}

const newAnecdote = async (newAnecdote) => {
  newAnecdote.votes = 0

  const createdResponse = await axios.post(baseUrl, newAnecdote)
  return createdResponse.data
}

const increaseVotes = async (id) => {
  const updateUrl = `${baseUrl}/${id}`
  const response = await axios.get(updateUrl)
  const anecdoteToUpdate = await response.data

  anecdoteToUpdate.votes += 1

  const updatedAnecdote = await axios.put(updateUrl, anecdoteToUpdate)
  return await updatedAnecdote.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, newAnecdote, increaseVotes }
