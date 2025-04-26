
document.addEventListener("DOMContentLoaded", function() {
    let link = document.getElementById("#addToCartLink");
    let price = document.querySelector(".priceofProduct");
    let priceDisplay = document.querySelector(".priceToDisplay");

    const alertMsg = () => {
        const confirmation = window.confirm("Do you want to add the item?");
        if (confirmation) {
            priceDisplay.textContent = price.textContent;
        }
    }

    link.addEventListener("click", alertMsg);
});
