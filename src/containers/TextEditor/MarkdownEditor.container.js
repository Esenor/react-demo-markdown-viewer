import React from 'react'
import MarkdownEditor from '../../components/ui/MarkdownEditor'
import { useTextEditor } from '../../contexts/TextEditorContext'

const MarkdownEditorContainer = () => {
  const { getText, updateText } = useTextEditor()
  return (<MarkdownEditor src={getText()} onChange={(text) => updateText(text)} />)
}

export default MarkdownEditorContainer
