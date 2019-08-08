import React from 'react'
import marked from 'marked'

const MarkdownViewer = ({ src }) => (<div dangerouslySetInnerHTML={{ __html: marked(src) }}></div>)

export default MarkdownViewer
