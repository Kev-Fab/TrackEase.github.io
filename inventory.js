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
    `;
    dataDisplay.innerHTML = inventoryData;
}

function showTaskAndWorkflow() {
    const dataDisplay = document.getElementById("data-display");
    dataDisplay.style.display = "block";

    const taskAndWorkflowData = `
        <h2>Task and Workflow Management</h2>
        <h3>Task Queue</h3>
        <table>
            <thead>
                <tr>
                    <th>Task ID</th>
                    <th>Status</th>
                    <th>Priority</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>In Progress</td>
                    <td>High</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Completed</td>
                    <td>Medium</td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Pending</td>
                    <td>Low</td>
                </tr>
            </tbody>
        </table>
        <h3>Real-Time Task Assignment</h3>
        <table>
            <thead>
                <tr>
                    <th>Robotic Arm</th>
                    <th>Current Task</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arm 1</td>
                    <td>Picking Electronics</td>
                    <td>In Progress</td>
                </tr>
                <tr>
                    <td>Arm 2</td>
                    <td>Idle</td>
                    <td>Available</td>
                </tr>
            </tbody>
        </table>
    `;
    dataDisplay.innerHTML = taskAndWorkflowData;
}

function showRoboticArmPerformance() {
    const dataDisplay = document.getElementById("data-display");
    dataDisplay.style.display = "block";

    const roboticArmData = `
        <h2>Robotic Arm Performance</h2>
        <h3>Live Operation Status</h3>
        <p>Real-time operations of robotic arms displayed here. (Feature coming soon!)</p>
        <h3>Efficiency Metrics</h3>
        <table>
            <thead>
                <tr>
                    <th>Robotic Arm</th>
                    <th>Tasks Completed/Hour</th>
                    <th>Error Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arm 1</td>
                    <td>30</td>
                    <td>2%</td>
                </tr>
                <tr>
                    <td>Arm 2</td>
                    <td>25</td>
                    <td>1.5%</td>
                </tr>
            </tbody>
        </table>
        <h3>Component Health</h3>
        <table>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gripper</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Sensor Calibration</td>
                    <td>Requires Adjustment</td>
                </tr>
            </tbody>
        </table>
    `;
    dataDisplay.innerHTML = roboticArmData;
}

function showAddProduct() {
    const dataDisplay = document.getElementById("data-display");
    dataDisplay.style.display = "block";

    const addProductData = `
        <h2>Add a Product</h2>
        <form>
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" required><br><br>
            
            <label for="category">Category:</label>
            <input type="text" id="category" name="category" required><br><br>
            
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" required><br><br>
            
            <label for="location">Location:</label>
            <input type="text" id="location" name="location" required><br><br>
            
            <button type="submit">Add Product</button>
        </form>
    `;
    dataDisplay.innerHTML = addProductData;
}

function showSearch() {
    const dataDisplay = document.getElementById("data-display");
    dataDisplay.style.display = "block";

    const searchProductData = `
        <h2>Search Product</h2>
        <form onsubmit="searchProduct(event)">
            <label for="search">Enter Product Name:</label>
            <input type="text" id="search" name="search" required>
            <button type="submit">Search</button>
        </form>
        <div id="searchResult"></div>
    `;
    dataDisplay.innerHTML = searchProductData;
}

function searchProduct(event) {
    event.preventDefault();
    const searchResult = document.getElementById("searchResult");
    const productName = document.getElementById("search").value;
    
    // Example Search Result
    searchResult.innerHTML = `
        <h3>Search Results</h3>
        <p>Product: ${productName}</p>
        <p>Location: Aisle 3, Slot B5</p>
    `;
}
function showAlerts() {
    const dataDisplay = document.getElementById("data-display");
    dataDisplay.style.display = "block";

    const alertsPageData = `
        <h2>Alerts: Task Overload Detected</h2>
        <p>Robotic Arm 1 is overburdened with tasks while Robotic Arm 2 remains underutilized. This is causing slower task completion and delays.</p>
        <h3>Current Task Distribution</h3>
        <table>
            <thead>
                <tr>
                    <th>Robotic Arm</th>
                    <th>Current Tasks</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arm 1</td>
                    <td>15</td>
                    <td>Overburdened</td>
                </tr>
                <tr>
                    <td>Arm 2</td>
                    <td>5</td>
                    <td>Underutilized</td>
                </tr>
            </tbody>
        </table>
        <button onclick="redistributeTasks()">Redistribute Tasks</button>
        <div id="redistributionResult"></div>
    `;
    dataDisplay.innerHTML = alertsPageData;
}

function redistributeTasks() {
    const redistributionResult = document.getElementById("redistributionResult");
    
    // Simulate redistribution logic
    const redistributedTasks = `
        <h3>Redistribution Result</h3>
        <table>
            <thead>
                <tr>
                    <th>Robotic Arm</th>
                    <th>New Task Allocation</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arm 1</td>
                    <td>10</td>
                    <td>Balanced</td>
                </tr>
                <tr>
                    <td>Arm 2</td>
                    <td>10</td>
                    <td>Balanced</td>
                </tr>
            </tbody>
        </table>
        <p>Tasks have been evenly distributed between the two robotic arms to improve efficiency and reduce delays.</p>
    `;

    redistributionResult.innerHTML = redistributedTasks;
}
