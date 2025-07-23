function selectMovie(title) {
  localStorage.setItem("selectedMovie", title);
  window.location.href = "details.html";
}

const movieData = {
  "Coolie": {
    cast: "Rajinikanth, Keerthy Suresh",
    genre: "Sandwood",
    review: "Mass action!",
    price: 250,
    image: "coolie.jpg"
  },
  "Thug Life": {
    cast: "Kamal Haasan",
    genre: "Sandwood",
    review: "Intense drama",
    price: 280,
    image: "thuglife.jpg"
  }
  // Add more movies here
};

// Populate details page
if (location.pathname.includes("details.html")) {
  const title = localStorage.getItem("selectedMovie");
  const data = movieData[title];
  if (data) {
    document.getElementById("movieTitle").innerText = title;
    document.getElementById("moviePoster").src = "assets/" + data.image;
    document.getElementById("cast").innerText = data.cast;
    document.getElementById("genre").innerText = data.genre;
    document.getElementById("review").innerText = data.review;
    document.getElementById("price").innerText = data.price;
  }
}

// Booking confirmation
function confirmBooking(e) {
  e.preventDefault();
  const movie = document.getElementById("movie").value;
  const seats = parseInt(document.getElementById("seats").value);
  const price = movieData[movie].price;
  const total = price * seats;
  document.getElementById("bookingStatus").innerText =
    `✅ Booking Confirmed!\nMovie: ${movie}\nSeats: ${seats}\nTotal: ₹${total}`;
}