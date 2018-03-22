import React from 'react'
import {Text, Button, Spinner} from 'native-base'
import PropTypes from 'prop-types'

const LoadingButton = props => {
  if (props.loading) {
    return (
      <Spinner/>
    )
  }
  return (
    <Button {...props} full small>
      <Text bold>{props.text}</Text>
    </Button>
  )
}

LoadingButton.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default LoadingButton
