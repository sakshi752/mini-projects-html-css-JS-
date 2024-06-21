const noteForm = document.querySelector('.note-form');
const notesContainer = document.querySelector('#notes-container');
const addButton = document.querySelector('#add-btn');
const editButton = document.querySelector('#edit-btn');
let editMode = false;
let noteToEdit = "";

const getNotes = () => {
    return JSON.parse(localStorage.getItem('notes')) || [];
}


const updateStorage = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}


const loadNotes = () => {
    const notes = getNotes();
    notes.forEach((noteObj) => {
        createNotecard(noteObj.title, noteObj.desc);
    });
}

const addToStorage = (title, desc) => {
    const note = { title, desc };
    const notes = getNotes();
    notes.push(note);
    updateStorage(notes);
}

const removeFromStorage = (title) => {
    let notes = getNotes();
    notes = notes.filter(note => note.title !== title);
    updateStorage(notes);
}

const updateStorageNote = (oldTitle, newTitle, newDesc) => {
    let notes = getNotes();
    notes = notes.map(note => note.title === oldTitle ? { title: newTitle, desc: newDesc } : note);
    updateStorage(notes);
}

const createNotecard = (title, desc) => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <h1 class="note-title">${title}</h1>
        <p class="note-desc">${desc}</p>
        <div class="btn">
            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button class="edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
        </div>
    `;
    notesContainer.appendChild(note);

    note.querySelector('.delete-btn').addEventListener('click', () => deleteNote(title));
    note.querySelector('.edit-btn').addEventListener('click', () => editNoteMode(title, desc));
}

const deleteNote = (title) => {
    removeFromStorage(title);
    const noteItems = document.querySelectorAll('.note');
    noteItems.forEach(note => {
        if (note.querySelector('.note-title').textContent === title) {
            notesContainer.removeChild(note);
        }
    });
}

const editNoteMode = (title, desc) => {
    editMode = true;
    noteToEdit = title;
    document.querySelector('#title').value = title;
    document.querySelector('#desc').value = desc;
    addButton.style.display = 'none'; // Hide the add button
    editButton.style.display='block'
}
const updateNote = (newTitle, newDesc) => {
    updateStorageNote(noteToEdit, newTitle, newDesc);
    const noteItems = document.querySelectorAll('.note');
    noteItems.forEach(note => {
        const noteTitleElement = note.querySelector('.note-title');
        const noteDescElement = note.querySelector('.note-desc');


        if (noteTitleElement && noteTitleElement.textContent === noteToEdit) {
            noteTitleElement.textContent = newTitle;
            noteDescElement.textContent = newDesc;
        }
    });
    noteToEdit = "";
    editMode = false;
    addButton.style.display = 'block'; // Hide the add button
    editButton.style.display='none'
}

const addNote = (title, desc) => {
    addToStorage(title, desc);
    createNotecard(title, desc);
}

window.addEventListener('load', () => {
    loadNotes();
});

noteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const desc = document.querySelector('#desc').value.trim();

    if (title && desc) {
        if (editMode) {
            updateNote(title, desc);
        } else {
            addNote(title, desc);
        }
        document.querySelector('#title').value = '';
        document.querySelector('#desc').value = '';
    } else {
        alert("Please enter both title and description");
    }
});
