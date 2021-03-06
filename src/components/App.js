import React from 'react';
import ToogleContainer from './ui/ToogleContainer'
import Loader from './ui/Loader'
import { TextEditorProvider } from '../contexts/TextEditorContext'

const MarkdownEditorContainer = React.lazy(async () => import('../containers/textEditor/MarkdownEditor.container'))
const MarkdownViewerContainer = React.lazy(async () => import('../containers/textEditor/MarkdownViewer.container'))

const initialMarkdown = '![React icon](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png)\n\n# React demo\n\n## Markdown viewer\n\nThis repository is an React app example of:\n\n- React 16\n- React Hooks\n- React Context\n\n> The markdown parser is done with the node module `marked`\n\n> The UI is done with the node module `semantic-ui-css` and `semantic-ui-react`\n\n---'

const App = () => (
  <React.Suspense fallback={<Loader />}>
    <TextEditorProvider defaultValue={initialMarkdown}>
      <ToogleContainer
        activeChildren={<MarkdownEditorContainer />}
        inactiveChildren={<MarkdownViewerContainer />}
        labelActive="Save & render markdown"
        labelInactive="Edit markdown"
        active={false}
      />
    </TextEditorProvider>
  </React.Suspense>
)

export default App
