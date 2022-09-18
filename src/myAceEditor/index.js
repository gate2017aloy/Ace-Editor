import React, {useState} from "react";
import AceEditor from "react-ace";
import  { Ace } from "ace-builds";


import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import "./../App.css"
import {buildKeywordsFromSchema} from "./helper";
import {schema} from "./schema";

const setOptions = {
    useWorker: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
    showLineNumbers: true,
    tabSize: 2,
};


const getCompleters = () => {
    const result = []
    result.push({
        caption: `Aloy`,
        name: `Aloy`,
        meta: `Aloy`,
        score: 1,
        value: `Aloy`,
    })
}


export const MyAceEditor = () => {

    const [value, setValue] = useState("");
    const [editor, setEditor] = useState(null);
    const onLoad = (editor) => {
        // console.log("loading")
        const results = getCompleters()
        // editor.completers.push(results)
        setEditor(editor)
    }
    // console.log({value})
    // console.log({editor})
    // console.log(editor.id)
    // console.log(buildKeywordsFromSchema(schema.schema))

    return (
        <div className={'ace-editor'}>
            <AceEditor
                mode="sql"
                theme="github"
                onChange={setValue}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
                setOptions={setOptions}
                value={value}
                onLoad={onLoad}
                placeholder={"//This is your sql editor"}
            />
        </div>
    )
}