import {useRef, useState} from "react";
import QueryEditor from "./redashEditor";
import {schema} from "./myAceEditor/schema";

function QueryEditorImpl() {
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
        <div className="App">


            <QueryEditor
                ref={editorRef}
                data-executing={true}
                syntax={null}
                value={query}
                schema={schema.schema}
                autocompleteEnabled={true}
                onChange={handleQueryEditorChange}
                onSelectionChange={setSelectedText}
            />


        </div>
    );
}

export default QueryEditorImpl;