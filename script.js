const noteArea = document.getElementById("noteArea");
const savedMessage = document.getElementById("savedMessage");
const notesList = document.getElementById("notesList");

let data = {
  notes: {}
};

function saveNote() {
  const noteContent = noteArea.value;
  
  if (noteContent.trim() === "") {
    showSavedMessage("Note cannot be empty!");
    return;
  }

  const timestamp = new Date().getTime();
  
  data.notes[timestamp] = noteContent;

  localStorage.setItem("myDiaryNote", JSON.stringify(data));
  
  showSavedMessage("Note saved!");
  
  addNoteToList(timestamp, noteContent);
}

function clearNote() {
  noteArea.value = "";
  showSavedMessage("Note cleared!");
}

function showSavedMessage(msg) {
  savedMessage.textContent = msg;
  savedMessage.style.opacity = 1;
  setTimeout(() => {
    savedMessage.style.opacity = 0;
  }, 2000);
}

function addNoteToList(timestamp, content) {
  const li = document.createElement("li");
  li.classList.add("saved-note-item");
  li.innerHTML = `
    <strong>Saved on: ${new Date(timestamp).toLocaleString()}</strong>
    <p>${content}</p>
  `;
  notesList.prepend(li);

}

window.onload = () => {
  const savedData = localStorage.getItem("myDiaryNote");
}