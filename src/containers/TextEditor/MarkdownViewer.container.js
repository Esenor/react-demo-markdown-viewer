import React from 'react'
import MarkdownViewer from '../../components/ui/MarkdownViewer'
import { useTextEditor } from '../../contexts/TextEditorContext'

const MarkdownViewerContainer = () => {
  const { getText } = useTextEditor()
  return (<MarkdownViewer src={getText()} />)
}

export default MarkdownViewerContainer
