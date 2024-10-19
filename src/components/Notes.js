import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Notes.css'; // Import the CSS file for styling
import Editor from './Editor'; // Import the Editor component

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({
        title: '',
        content: '',
        tags: '',
        date: new Date().toISOString().split('T')[0], // Default date format
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [noteIdToEdit, setNoteIdToEdit] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [showEditor, setShowEditor] = useState(false);

    const navigate = useNavigate();

    // Fetch notes from the backend when the component mounts
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            navigate('/login'); // Redirect to login if not authenticated
            return;
        }

        fetch(`http://localhost:5000/notes?userId=${userId}`) 
            .then(response => response.json())
            .then(data => setNotes(data))
            .catch(error => console.error('Error fetching notes:', error));
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewNote({
            ...newNote,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId'); // Retrieve user ID

        try {
            if (editMode) {
                const updatedNote = {
                    ...newNote,
                    userId, // Ensure user ID is part of the update
                    tags: newNote.tags.split(','),
                    date: newNote.date,
                };
                // Handle edit logic here
            } else {
                const noteToAdd = {
                    ...newNote,
                    userId, // Attach the user ID to the new note
                    tags: newNote.tags.split(','),
                };
                const response = await fetch('http://localhost:5000/notes', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(noteToAdd),
                });
                if (!response.ok) {
                    throw new Error('Failed to add new note');
                }
                const newNoteFromResponse = await response.json();
                setNotes([...notes, newNoteFromResponse]);
            }
            setNewNote({ title: '', content: '', tags: '', date: new Date().toISOString().split('T')[0] });
            setShowForm(false);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to perform the operation. Please check your network connection and try again.');
        }
    };

    return (
        <div className="blog">
            {/* Existing Notes component code */}
        </div>
    );
};

export default Notes;
