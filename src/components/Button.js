import React from 'react'
import {Text, Button as NBButton, Spinner} from 'native-base'

export const Button = props => {
  if (props.loading) return <Spinner/>
  return <NBButton {...props}/>
}
