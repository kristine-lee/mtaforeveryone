import React from 'react'
import CircularProgress  from '@material-ui/core/CircularProgress'

const Loading = () => {
  return (
  <>
  <CircularProgress size={10}/>
  <p>Please check that location is enabled!</p>
  </>
  )
}

export default Loading
