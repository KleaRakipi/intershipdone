

  // Function to toggle the visibility of the search bar and hide other header components
  function toggleSearchBar() {
    var searchBar = document.getElementById("searchBar");
    var headerIcons = document.querySelectorAll(".mobile-icons img");
    var companyName = document.querySelector(".company-name");
    var menuDropdown = document.getElementById("menuDropbtn"); 
    
    searchBar.classList.toggle("show");
    headerIcons.forEach(icon => icon.classList.toggle("hide"));
    companyName.classList.toggle("hide");
    menuDropdown.classList.toggle("hide"); 
  }
  
  // Function to perform search 
  function search() {
    var searchInput = document.querySelector('#searchBar input').value;
    // Perform search operation based on searchInput value
    console.log("Search query: " + searchInput);
  }
  
  // Event listener to detect clicks on the body
  document.body.addEventListener('click', function(event) {
    var searchBar = document.getElementById("searchBar");
    var searchIcon = document.querySelector(".mobile-header img[src='../images/search.svg']");
    
    // Check if the click is outside the search bar and search icon
    if (!searchBar.contains(event.target) && event.target !== searchIcon) {
      searchBar.classList.remove("show");
      var headerIcons = document.querySelectorAll(".mobile-icons img");
      var companyName = document.querySelector(".company-name");
      var menuDropdown = document.getElementById("menuDropbtn");
      headerIcons.forEach(icon => icon.classList.remove("hide"));
      companyName.classList.remove("hide");
      menuDropdown.classList.remove("show");
    }
  });
  
  