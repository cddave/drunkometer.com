function next() {
		var e = document.getElementById("weightselect");
		var option = e.options[e.selectedIndex].value;
		var gen = document.getElementById("slct");
		var genOption = gen.options[gen.selectedIndex].value;
		var weight = document.getElementById("weight");
		var range_ge = document.getElementById("range_ge");
		var ge = parseInt(range_ge.value);
		var weightValue;
		if(weight.value == "")
		{
			alert("Please Enter Your Weight");
		}
		else{
			if(option == "1")
				weightValue = parseInt(weight.value) * 0.454;

			sessionStorage.setItem("weight", weightValue);
			sessionStorage.setItem("age", ge);
			sessionStorage.setItem("gener", genOption);
			window.location.href ="game1.html";


		}
}
