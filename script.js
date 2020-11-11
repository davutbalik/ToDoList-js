const addItem = function (e) {
    console.log(e.target.innerHTML);
  }

const removeItem = function (e) {
    console.log(e.target.innerHTML);
  }
  
  
  // document.getElementById('btn_add').onclick = addItem;
  
  document.getElementById('btn_add').addEventListener('click', addItem);
  document.getElementById('btn_add').addEventListener('keypress', addItem);
  document.getElementById('btn_remove').removeEventListener('click', removeItem);
  
  