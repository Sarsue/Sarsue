document.addEventListener('DOMContentLoaded', () => {
    fetchBitcoinBlockData();
    setInterval(fetchBitcoinBlockData, 10 * 60 * 1000); // Fetch data every 10 minutes
});

async function fetchBitcoinBlockData() {
    try {
        const response = await fetch('https://blockchain.info/latestblock');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayBlockData(data);
    } catch (error) {
        console.error('Error fetching Bitcoin block data:', error);
        document.getElementById('blockData').innerHTML = '<p>Error loading data. Please try again later.</p>';
    }
}

function displayBlockData(data) {
    const blockDataDiv = document.getElementById('blockData');
    blockDataDiv.innerHTML = `
        <h2>Latest Bitcoin Block</h2>
        <p><strong>Hash:</strong> ${data.hash}</p>
        <p><strong>Height:</strong> ${data.height}</p>
        <p><strong>Time:</strong> ${new Date(data.time * 1000).toLocaleString()}</p>
        <p><strong>Transactions:</strong> ${data.txIndexes.length}</p>
    `;
}
