import React, { useState } from 'react'
import Container from '../container/Container'
import Segment from '../container/Segment'
import { Button } from 'semantic-ui-react'

const ToogleContainer = ({
    activeChildren = (<div></div>),
    inactiveChildren = (<div></div>),
    labelActive = 'active',
    labelInactive = 'inactive',
    active = true 
  }) => {
  const [toggle, updateToggle] = useState(active)
  return (
    <Container>
      <Segment>
        {(toggle)? (activeChildren): (inactiveChildren)}
        <Button toggle active={toggle} onClick={() => updateToggle(!toggle)}>{(toggle) ? labelActive : labelInactive}</Button>
      </Segment>
    </Container>
  )
}

export default ToogleContainer
