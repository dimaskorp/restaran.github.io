function myFunction() {
    const input = document.querySelector("#id_seach");
    filter = input.value.toUpperCase();
    const cards = document.querySelectorAll(".cards__items .cards__item");

    for (let i = 0; i < cards.length; i++) {
        h3 = cards[i].querySelector("h3");
        txtValue = h3.textContent || h3.innerText;

        if (txtValue.toUpperCase().includes(filter)) {
            cards[i].style.display = "";
            console.log(cards[i]);
        }
        else {
            cards[i].style.display = "none";
        }
    }
};