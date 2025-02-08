const GAME_ID = "2440500124";
const COUNTER_ELEMENT = document.getElementById("visit-counter");

async function updateVisitCounter() {
    try {
        const response = await fetch(`https://games.roproxy.com/v1/games?universeIds=${GAME_ID}`);
        const data = await response.json();
        
        if (data && data.data && data.data.length > 0) {
            const visits = data.data[0].visits;
            COUNTER_ELEMENT.innerHTML = `Doors Visits Count: <span style="color: red;">${visits.toLocaleString()}</span>`;
        } else {
            COUNTER_ELEMENT.innerHTML = "Failed to load visits.";
        }
    } catch (error) {
        COUNTER_ELEMENT.innerHTML = "Error fetching data.";
    }
}

setInterval(updateVisitCounter, 5000);

updateVisitCounter();
