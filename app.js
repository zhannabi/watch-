let hour = document.querySelector(".hou")
let minute = document.querySelector(".minut")
let second = document.querySelector(".secon")

setInterval(()=>{
	let date = new Date();
	let hou = date.getHours()*30;
	let minut = date.getMinutes()*6;
	let secon= date.getSeconds()*6;
	
	hour.style.transform = `rotateZ(${(hou)+(minut/12)}deg)`;
	minute.style.transform = `rotateZ(${minut}deg)`;
	second.style.transform = `rotateZ(${secon}deg)`;
})
