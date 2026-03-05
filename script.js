
function toggleMenu(){
document.getElementById("nav").classList.toggle("show");
}

const slides=[
"https://picsum.photos/900/500?random=10",
"https://picsum.photos/900/500?random=11",
"https://picsum.photos/900/500?random=12"
]

let index=0

function showSlide(){
document.getElementById("slide").src=slides[index]
}

function nextSlide(){
index=(index+1)%slides.length
showSlide()
}

function prevSlide(){
index=(index-1+slides.length)%slides.length
showSlide()
}

function bookStay(e){
e.preventDefault()
alert("Booking request sent. We will contact you soon.")
}
