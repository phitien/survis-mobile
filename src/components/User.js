import React from 'react'
import {View, Item, Input, Text, Icon} from 'native-base'
import DatePicker from 'react-native-datepicker'

import {User as style} from '../../survis-themes/styles/components'

import {itemHelper, substr} from '../utils'

import {Button} from './Button'

const User = props => {
  const item = props.item
  const onSave = props.onSave,
    onChange = props.onChange,
    onSwitch = props.onSwitch,
    onSwitchPassword = props.onSwitch

  const renderPasswordPart = e => {
    return <View key='password' p-25 m-10 grey>
      {props.editingPassword ? <View>
          <Item login='login'>
            <Input style={style.input} value={item.password} secureTextEntry={true} placeholder='Password'
              onChangeText={(password) => onChange('password', password)}/>
          </Item>
          <View horizontal style={{marginTop: 20}}>
            <Button onPress={onSave} full small>
              <Text bold>Save</Text>
            </Button>
            <Text></Text>
            <Button onPress={e => onSwitchPassword(false)} full small>
              <Text bold>Cancel</Text>
            </Button>
          </View>
        </View>
      : <Text bold theme onPress={e => onSwitchPassword(true)}>Change password</Text>}
    </View>
  }
  const renderUserInfoPart = e => {
    return <View key='info' m-10 p-25 grey>
      <Text fs12 bold>User</Text>
      {props.editingUser ? [
        <View key='info' m-t-10>
          <Text fs12>Name</Text>
          <Item login='login' error={false}>
            <Input style={style.input} value={item.fname} placeholder='Fullname'
               onChangeText={(fname) => onChange('fname', fname)}/>
          </Item>
          <Text fs12>Phone</Text>
          <Item login='login' error={false}>
            <Input style={style.input} value={item.mobile} placeholder='Mobile'
              onChangeText={(mobile) => onChange('mobile', mobile)}/>
          </Item>
          <Text fs12>Date of birth</Text>
          <DatePicker customStyles={style.datepicker} date={item.birthday} mode='date' placeholder='Birthday' format='YYYY-MM-DD' minDate='1900-01-01' confirmBtnText='Confirm' cancelBtnText='Cancel'
            onDateChange={(birthday) => onChange('birthday', birthday)}/>
        </View>,
        <View key='actions' horizontal style={{marginTop: 20}}>
          <Button full small text='Save'
            loading={this.props.User.loading}
            onPress={onSave}/>
          <Text></Text>
          <Button onPress={e => onSwitch(false)} full small>
            <Text bold>Cancel</Text>
          </Button>
        </View>
      ] : [
        <Button key='action' style={style.iconedit} transparent='transparent'
          onPress={e => onSwitch(true)}>
          <Icon name='md-create'/>
        </Button>,
        <View key='info' m-t-10>
          <Text fs12>{item.fname || 'Not set'}</Text>
          <Text fs12>{item.email}</Text>
        </View>
      ]}
    </View>

    return [
      renderUserInfoPart(),
      renderPasswordPart(),
    ]
  }
}

export {
  User
}
