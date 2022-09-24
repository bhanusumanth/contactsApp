const btnDelete= document.querySelectorAll('.btn-delete');
if(btnDelete) {
  const btnArray = Array.from(btnDelete);
  btnArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if(!confirm('Are you sure you want to delete it?')){
        e.preventDefault();
      }
    });
  })
}
function toggleDeletedTable() {
  let deletedTable = document.getElementById("deleted");
  if (deletedTable.style.visibility === "hidden") {
    deletedTable.style.visibility = "visible";
  } else {
    deletedTable.style.visibility = "hidden";
  }
}

