
var myList = document.getElementsByTagName("LI");
var listCount = document.getElementById('list-count');
var count = 0;


for (var i = 0; i < myList.length; i++) {
  
  var span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);


}

//----------------- handling the closing button------------
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// -------------Create a new list item ----------
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please add some description");
  } else {
    document.getElementById("myList").appendChild(li);
    count++;
    listCount.innerHTML = count;
  }
  document.getElementById("task-input").value = "";

  // ----------Adding checkbox-------------------- 
  var box = document.createElement("INPUT");
  box.setAttribute("type", "checkbox");
  box.setAttribute("id", "check");
  li.appendChild(box);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // -----------Remove an item if task is marked as completed--------------
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {

      var div = this.parentElement;
      var ch = div.querySelectorAll("#check")[0].checked;
      if(ch){
        div.style.display = "none";
        count--;
        listCount.innerHTML = count+"";
      }else{
        window.alert("Please complete the task and Delete !")
      }
      
    }
  }
}