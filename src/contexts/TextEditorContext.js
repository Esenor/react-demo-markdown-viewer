import React, {useState, useContext} from 'react'

/**
 * Text editor context
 */
const TextEditorContext = React.createContext({
  text: '',
  updateText: () => {},
  getText: () => {}
})

/**
 * Text editor custom hook
 */
export const useTextEditor = () => useContext(TextEditorContext)

/**
 * Text editor components provider (provide context methods to childs components)
 */
export const TextEditorProvider = ({children = (<div></div>), defaultValue = ''}) => {
  const [state, updateState] = useState(defaultValue)

  const updateText = (text) => updateState(text)
  const getText = () => state

  const providerParameters = { text: state, updateText, getText}

  return (
    <TextEditorContext.Provider value={providerParameters}>
      {children}
    </TextEditorContext.Provider>
  )
}


