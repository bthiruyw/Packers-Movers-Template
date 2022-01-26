$(document).ready(function(){
		$("#myModal").modal('show');
});
// navbar links active 

var navItem = document.querySelectorAll('.nav-item');


navItem.forEach(function(items){
	items.addEventListener('click',(e)=>{
		for (var i = 0; i <= navItem.length; i++) {
			if (navItem[i].className == "nav-item active" || navItem[i].className == "mx-2 nav-item active"){
				navItem[i].classList.remove('active');
			}
			else{
				items.classList.add('active');
			}
		}		
	})
});


var topBtn = document.getElementById('topBtn');

window.onscroll = ()=>{
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topBtn.style.display = 'block';
		
	}else{
		topBtn.style.display = 'none';
	}
}




