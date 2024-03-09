import React from 'react'
import PageHeader from '../../organisms/PageHeader'
import PageFooter from '../../organisms/PageFooter'
import {IBaseLayoutProps} from './types'

const BaseLayout: React.FC<IBaseLayoutProps> = ({children}) => (
  <>
    <PageHeader />
    <div className="overflow-auto">{children}</div>
    <PageFooter />
  </>
)

export default BaseLayout
