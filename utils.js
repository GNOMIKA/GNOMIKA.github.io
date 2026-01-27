$(function(){
    $("<h1>GNOMIKA</h1><div class=\"titleinformation\"><nav><ul><li><a href=\"introduction.html\">Introduction</a></li> <li><a href=\"mss_list.html\">Manuscripts</a></li> <li><a href=\"collections.html\">Transcriptions</a></li><li><a href=\"concordance.html\">Concordance</a></li><li><a href=\"bibliography.html\">Bibliography</a></li><li><a href=\"contact.html\">Contact<a></li></ul></nav></div>").
    prependTo(".dummyHeader");
  });

  document.addEventListener("DOMContentLoaded", function() {
  var tests = document.getElementsByClassName("toggleButton");
  var element = document.getElementById("search_result");
  console.log(element);
  if (element != null) {
    element.remove();
  }
for(i = 0; i < tests.length; i++) {
    console.log(i);
    tests[i].addEventListener('click', function() {
    console.log(this.className);
    console.log(this.getAttribute('value'));
    var id = this.getAttribute('value');
    this.classList.toggle("checked");
    const container = document.getElementById(id);
    container.classList.toggle("display-none");
    
    var old_search_result = document.getElementById("search_result");

	if (old_search_result != null) {  
		old_search_result.remove();
	}
}); 
      
}
      
  var popups = document.getElementsByClassName("innerTextBlock");
  for(i = 0; i < popups.length; i++) {
    console.log("hej");
    
          popups[i].addEventListener('click', function() {
            console.log("hej");
            const nodes = this.querySelectorAll("span.popuptext");
            for(t = 0; nodes.length; t++) {
                nodes[t].classList.toggle("show");
            }
                        
          });
  }


  /**transcriptionCheckbox.checked = true;
  



  diplomaticCheckbox.addEventListener('change', function() {
      
      const cols = document.getElementsByClassName("diplomatic");
      
      if(this.checked) {
          for(i = 0; i < cols.length; i++) {
              cols[i].style.display = "inline-block";
          }
      }
      else{
          for(i = 0; i < cols.length; i++) {
              cols[i].style.display = "none";
          }
      }
      
  });*/
  
  window.addEventListener("load", (event) => {
      console.log("page is fully loaded");
    });
  
  /**transcriptionCheckbox.addEventListener('change', function() {
  
      //const elements = document.getElementsByClassName("transcription");
      
      var cols = document.getElementsByClassName("transcription");
      
  
      if(this.checked) {
          for(i = 0; i < cols.length; i++) {
              cols[i].style.display = "inline-block";
          }
      }
      else{
          for(i = 0; i < cols.length; i++) {
              cols[i].style.display = "none";
          }
      }
      
  });*/
  
  function myFunction(element) {
      var tex = element.nextSibling.innerHTML;
      if (tex != "") {
          alert(tex);
      }
      else {
          alert("has no relations")
      }
  }
  
  function displayDiplomatic() {
      var cols = document.getElementsByClassName("diplomatic");
      for(i = 0; i < cols.length; i++) {
          cols[i].style.display = "block";
      }
  
      var cols2 = document.getElementsByClassName("transcription");
      for(i = 0; i < cols2.length; i++) {
          cols2[i].style.display = "none";
      }
  }
  
  function displayTranscription() {
      var cols = document.getElementsByClassName("diplomatic");
      for(i = 0; i < cols.length; i++) {
          cols[i].style.display = "none";
      }
  
      var cols2 = document.getElementsByClassName("transcription");
      for(i = 0; i < cols2.length; i++) {
          cols2[i].style.display = "block";
      }
  }
  
  function show(element) {
      console.log("test");
      var popups = element.getElementsByClassName("popuptext");
      for(i = 0; i < popups.length; i++) {
          popups[i].classList.toggle("show");
      }
  }

  function search() {

    var name = document.getElementById("searchForm").elements["searchItem"].value;
 
    var pattern = name.toLowerCase();
 
    var targetId = "";
 
    var divs = document.getElementsByClassName("diplomatic");
 
    for (var i = 0; i < divs.length; i++) {

       var index = divs[i].innerText.toLowerCase().indexOf(pattern);
 
       if (index != -1) {
 
          targetId = divs[i].parentNode.id;
 
          document.getElementById(targetId).scrollIntoView();
 
          break;
 
       }
 
    }  
 
 }


});
