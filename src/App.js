import logo from './logo.svg';
import './App.css';
import {MyAceEditor} from "./myAceEditor";
import {MyMonacoEditor} from "./myMonacoEditor";
import {useRef, useState} from "react";
import QueryEditor from "./redashEditor";
import {schema} from "./myAceEditor/schema";
import {useDebouncedCallback} from "use-debounce";
import QueryEditorImpl from "./QueryEditorImpl";


function App() {
    const editorRef = useRef(null);
    const {query, setQuery} = useState("")

    // const [handleQueryEditorChange] = useDebouncedCallback(queryText => {
    //     setQuery(queryText);
    // }, 100);

    const handleQueryEditorChange = (queryText => {
        setQuery(queryText);
    }, 100);

    const [selectedText, setSelectedText] = useState(null);

    return (
        <div>
            <QueryEditorImpl/>
        </div>
    );
}

export default App;
