function next() {
	 var gender = document.getElementsByName('optradio');
        var genValue = false;

        for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                genValue = true; 
				var p= document.querySelector('input[name="optradio"]:checked').value;	
				var c= parseInt(sessionStorage.getItem("score"));
				if(isNaN(c))
					sessionStorage.setItem("score",5);
				switch(p) {
				   case "option1":
				    sessionStorage.setItem("score", c+10);
					// code block
					break;
				  case "option2":
					// code block
					sessionStorage.setItem("score", c+8);
					break;
					case "option3":
					// code block
					sessionStorage.setItem("score", c+5);
					break;
					case "option4":
					// code block
					sessionStorage.setItem("score", c+3);
					break;
					
				  default:
					// code block
				}	
				window.location.href ="game7.html";
            }
        }
        if(!genValue){
            alert("Please Choose one RIN");
            return false;
	
			}
			
			
}