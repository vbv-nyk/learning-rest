import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './Form';
import { Homepage } from './Homepage';

const App = () => {
    const [notes, setNotes] = useState([]);
    const notesProps = { notes, setNotes };
    useEffect(() => {
        axios
            .get("http://localhost:3001/notes")
            .then((response) => {
                const notesData = response.data;
                setNotes(notes.concat(notesData));
            });
    }, []);
    return (<>
        <Homepage {...notesProps} />
        <Form {...notesProps} />
    </>)
}
export default App;
