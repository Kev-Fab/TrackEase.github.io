function showInventoryOverview() {
    const dataDisplay = document.getElementById("data-display");
    dataDisplay.style.display = "block";

    const inventoryData = `
        <h2>Inventory Overview</h2>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Count</th>
                    <th>Space Utilization</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Electronics</td>
                    <td>500</td>
                    <td>85%</td>
                </tr>
                <tr>
                    <td>Perishables</td>
                    <td>200</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Clothing</td>
                    <td>350</td>
                    <td>75%</td>
                </tr>
            </tbody>
        </table>
        
        <h3 class="section-title">Detailed Item List</h3>
        <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Smartphone</td>
                    <td>Electronics</td>
                    <td>120</td>
                    <td>Slot A1</td>
                </tr>
                <tr>
                    <td>Milk Packets</td>
                    <td>Perishables</td>
                    <td>50</td>
                    <td>Slot B4</td>
                </tr>
                <tr>
                    <td>Jeans</td>
                    <td>Clothing</td>
                    <td>80</td>
                    <td>Slot C2</td>
                </tr>
            </tbody>
        </table>
        
        <h3 class="section-title">Expiry Monitoring</h3>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Expiry Date</th>
                    <th>Remaining Days</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Yogurt</td>
                    <td>Perishables</td>
                    <td>2025-01-15</td>
                    <td>3 Days</td>
                </tr>
                <tr>
                    <td>Cheese</td>
                    <td>Perishables</td>
                    <td>2025-01-20</td>
                    <td>8 Days</td>
                </tr>
            </tbody>
        </table>
    `;

    dataDisplay.innerHTML = inventoryData;
}
