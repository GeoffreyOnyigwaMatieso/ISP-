document.addEventListener("DOMContentLoaded", () => {
    const itemSelect = document.getElementById("item");
    const periodInput = document.getElementById("period");
    const totalCostInput = document.getElementById("totalCost");
    const payButton = document.getElementById("payButton");

    // Pricing data
    const pricingData = {
        "affiliate_member": { price: 0, period: "Free" },
        "member_individual": { price: 15, period: "€15.00 every 1 month" },
        "epn_individual": { price: 10, period: "€10.00 every 1 month" },
        "member_fellow": { price: 15, period: "€15.00 every 1 month" },
        "corporate_small": { price: 2500, period: "€2,500.00 every 1 year" },
        "corporate_medium": { price: 4500, period: "€4,500.00 every 1 year" },
        "corporate_large": { price: 6000, period: "€6,000.00 every 1 year" },
        "member_corporate": { price: 200, period: "€200.00 yearly" },
        "ethics_exam": { price: 25, period: "€25.00 every 1 year" },
        "ethical_sales_business": { price: 100, period: "€100.00 every 1 year" },
        "master_class": { price: 3000, period: "€3,000.00 yearly" },
        "bespoke_webinars": { price: 1000, period: "€1,000.00 yearly" }
    };

    itemSelect.addEventListener("change", (event) => {
        const selectedItem = event.target.value;

        if (pricingData[selectedItem]) {
            const { price, period } = pricingData[selectedItem];
            periodInput.value = period;
            totalCostInput.value = `€${price.toFixed(2)}`;
            payButton.textContent = `Pay €${price.toFixed(2)}`;
        } else {
            periodInput.value = "";
            totalCostInput.value = "";
            payButton.textContent = "Pay";
        }
    });
});
