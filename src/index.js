let copyrightYear = document.getElementById("year");

let getYear = new Date();
let dayVar = getYear.getDate();
let monthVar = getYear.getMonth();
let year = getYear.getUTCFullYear();

copyrightYear.textContent = `${dayVar} - ${monthVar + 1} - ${year}`;
//innerHTML

// <div class="name">
//   <label for="name">Name:</label>
//   <input type="text" id="name" name="user_name">
// </div>
// <div>
//   <label for="name">Email:</label>
//   <input type="text" id="name" name="user_name">
// </div>
