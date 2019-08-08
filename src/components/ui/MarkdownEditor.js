import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const MarkdownEditor = ({ src, onChange }) => (
  <Form>
    <TextArea rows="20" placeholder='Tell us more' onChange={(event) => { onChange(event.target.value) }} defaultValue={src}/>
  </Form>
)

export default MarkdownEditor
