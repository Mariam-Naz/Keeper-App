import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App(){
    return <div>
    <header><Header /></header>
   <body><Note /></body>
    <footer><Footer /></footer>
    </div>
}

export default App;