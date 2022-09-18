import Editor from "@monaco-editor/react";

export const MyMonacoEditor = () => {
  return (
      <Editor
          height="90vh"
          defaultLanguage="sql"
          language={"sql"}
          defaultValue="// some comment"
      />
  )
}