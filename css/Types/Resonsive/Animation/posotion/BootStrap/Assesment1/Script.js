const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("keyup", function () {
    let filter = searchInput.value.toLowerCase();
    let items = itemList.getElementsByTagName("li");

    let matchFound = false;

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();

        if (text.includes(filter)) {
            items[i].style.display = "";
            matchFound = true;
        } else {
            items[i].style.display = "none";
        }
    }

    // Show or Hide the "No results found" message
    if (matchFound) {
        noResult.classList.add("hidden");
    } else {
        noResult.classList.remove("hidden");
    }
});