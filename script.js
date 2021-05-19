
const container=document.querySelector('.container');
const seats=document.querySelectorAll('row .seat');
const total=document.getElementById('total');
const count=document.getElementById('count');
const movieselect=document.getElementById('Movie');
populateui();

let ticketPrice = +movieselect.value;
function updateselectedcount(){
    if(movieselect.value !== '') {
        // Get all seats that are selected
        const selectedSeats = document.querySelectorAll('.row .seat.selected');
        // Get the index of selected seats from all seats
        const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
        // Getting the count of total selected seats
        const selectedSeatsCount = selectedSeats.length;
        // Updating the UI to show number of selected seats
        count.innerText = selectedSeatsCount;
        // Updating the UI to show total price of tickets
        total.innerText = selectedSeatsCount * ticketPrice;
        // Saving to Local Storage
        localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
    }
}
container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied') ){
     e.target.classList.toggle('selected');
    updateselectedcount();
    }
})
function setmoviedata(movieIndex,movieprice)
{
    localStorage.setItem('selectedmovieIndex',movieIndex);
    localStorage.setItem('selectedmovieprice',movieprice);
}
movieselect.addEventListener('change', e=>{
    ticketPrice=+e.target.value;
    setmoviedata(e.target.selectedIndex,e.target.value);
    updateselectedcount();

})
function populateui(){
    const selectedseats=JSON.parse(localStorage.getItem('selectedseats'));
    if(selectedseats !==null && selectedseats.length>0){
        seats.forEach((seats,index)=>{
            if(selectedseats.indexOf(index)>-1){
                seats.classList.add('selected')
            }
        })
    };
    const selectedmovieIndex=localStorage.getItem('selectedMovieIndex');
    if(selectedmovieIndex !==null)
    {
        movieSelect.selectedIndex=selectedmovieIndex;
    }
}
container.addEventListener('click', e => {
    if(movieSelect.value !== '') {
        if(e.target.classList.contains('seat') &&
            !e.target.classList.contains('occupied')
        ) {
            e.target.classList.toggle('selected')
            updateSelectedCount();
        }
    }
})
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})
updateselectedcount();
