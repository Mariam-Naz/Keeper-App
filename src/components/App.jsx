import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App(){
    return <div>
    <header><Header /></header>
   <body>{notes.map(note=>
       <Note key = {note.id} title ={note.title} content = {note.content}/>
   )}</body>
    <footer><Footer /></footer>
    </div>
}

export default App;