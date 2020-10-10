import * as React from 'react'
import {DrawerActions} from '@react-navigation/native'

export const navigationRef = React.createRef()

export const closeDrawer = () =>
  navigationRef.current?.dispatch(DrawerActions.closeDrawer())
