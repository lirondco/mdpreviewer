import { useState } from 'react';
import './App.css';
import dompurify from 'dompurify';
import defaultMarkdown from './defaultMarkDown';
import marked from 'marked';
import Editor from './Editor';
import Preview from './Preview';

const App = ():JSX.Element => {
  const [markDown, setMarkDown] = useState(defaultMarkdown);
  const [expanded, setExpanded] = useState("none");
  const sanitizer = dompurify.sanitize;
  const markedDown = sanitizer(marked(markDown, {breaks: true}));
  
  const isExpNone = expanded === "none";
  const toggleExpandEditor = isExpNone ? "editor" : "none";
  const toggleExpandPreview = isExpNone ? "preview" : "none";
  const renderEditor = ():JSX.Element => (
    <Editor 
      handleChange={(ev:any) => setMarkDown(ev.target.value)}
      isExpanded={expanded}
      handleExpand={() => setExpanded(toggleExpandEditor)}
      text={markDown}
    />
  );
  const renderPreview = ():JSX.Element => (
    <Preview 
      text={markedDown}
      isExpanded={expanded}
      handleExpand={() => setExpanded(toggleExpandPreview)}
    />
  );
  const renderComponents = ():JSX.Element => {
    if(expanded === "editor") {
      return renderEditor();
    }
    if(expanded === "preview") {
      return renderPreview();
    }
    else {
      return (
        <>
          {renderEditor()}
          {renderPreview()}
        </>
      )
    }
  }

  return (
    <main>
      {renderComponents()}
    </main>
  )
}

export default App;
