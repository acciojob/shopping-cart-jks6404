//your code here
 const itemNameInput = document.getElementById("item-name-input");
        const itemPriceInput = document.getElementById("item-price-input");
        const addBtn = document.getElementById("add");
        const shoppingList = document.getElementById("shopping-list");
        const totalCell = document.getElementById("total");

        addBtn.addEventListener("click", () => {
            const itemName = itemNameInput.value.trim();
            const itemPrice = parseFloat(itemPriceInput.value);

            if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
                alert("Please enter a valid item name and price.");
                return;
            }

            const newRow = document.createElement("tr");
            const itemNameCell = document.createElement("td");
            const itemPriceCell = document.createElement("td");

            itemNameCell.textContent = itemName;
            itemPriceCell.textContent = itemPrice.toFixed(2);

            newRow.appendChild(itemNameCell);
            newRow.appendChild(itemPriceCell);
            shoppingList.insertBefore(newRow, totalCell.parentNode);

            // Update the grand total
            let currentTotal = parseFloat(totalCell.textContent);
            currentTotal += itemPrice;
            totalCell.textContent = currentTotal.toFixed(2);

            // Clear input fields
            itemNameInput.value = "";
            itemPriceInput.value = "";
        });