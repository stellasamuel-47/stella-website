document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Here you can add code to handle form submission, like sending data to a server
    // For now, let's just display a message
    alert("Form submitted!");
});
document.getElementById("filter").addEventListener("change", function() {
    const filterValue = this.value;
    const items = document.querySelectorAll(".item");
    
    items.forEach(item => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

