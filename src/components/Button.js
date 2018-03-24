import React from 'react'
import {Text, Button as NBButton, Spinner} from 'native-base'
import {PRIMARY} from '../constants'

export const Button = props => {
  if (props.loading) return <Spinner color={PRIMARY}/>
  return <NBButton {...props}/>
}
