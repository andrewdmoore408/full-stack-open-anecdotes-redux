import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const inputText = useSelector(state => state.filter)

  const handleChange = (event) => {
    const filterText = event.target.value

    dispatch(setFilter(filterText))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={inputText} onChange={handleChange} />
    </div>
  )
}

export default Filter
