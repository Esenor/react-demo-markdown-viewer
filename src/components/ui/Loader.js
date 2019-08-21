import React from 'react'
import { Loader as LoaderUi} from 'semantic-ui-react'
import Container from '../container/Container'
import Segment from '../container/Segment'

const Loader = () => (
  <Container>
    <Segment>
      <LoaderUi active inline='centered' />
    </Segment>
  </Container>
)

export default Loader
