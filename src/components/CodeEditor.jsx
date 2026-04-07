import React from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor({ language, code, setCode }) {
  const langMap = {
    python: 'python',
    java: 'java',
    c: 'c'
  };

  return (
    <Editor
      height="100%"
      defaultLanguage={langMap[language]}
      language={langMap[language]}
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value)}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        fontFamily: "'Fira Code', monospace",
        scrollBeyondLastLine: false,
        roundedSelection: false,
        padding: { top: 16 }
      }}
      loading={<div className="text-gray-500 font-mono text-sm">Initializing Editor Environment...</div>}
    />
  );
}
