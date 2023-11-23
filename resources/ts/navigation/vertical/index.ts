import appAndPages from './app-and-pages'
import charts from './charts'
import dashboard from './dashboard'
import myTestApp from './my-test-app'
import forms from './forms'
import others from './others'
import uiElements from './ui-elements'
import type { VerticalNavItems } from '@/@layouts/types'


export default [...dashboard, ...appAndPages, ...uiElements, ...forms, ...charts, ...myTestApp, ...others] as VerticalNavItems
