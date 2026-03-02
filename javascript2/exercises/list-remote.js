// -------------------------------------------------------
// COUNTRIES FETCH
// -------------------------------------------------------
async function fetchCountriesData(region = "europe") {
    const container = document.getElementById("remote-data-container");
    container.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        if (!response.ok) throw new Error(`Network error: ${response.status}`);

        const data = await response.json();
        displayCountriesData(data);
    } catch (error) {
        container.innerHTML = `<p class="no-results">⚠️ Could not load countries. Please try again.</p>`;
        console.error(error);
    }
}

// -------------------------------------------------------
// DISPLAY COUNTRIES
// -------------------------------------------------------
function displayCountriesData(countriesArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    countriesArray.forEach(country => {
        htmlOutput += `
        <div style="border:1px solid #ccc;padding:12px;border-radius:6px;">
            <img src="${country.flags.png}" width="100">
            <p>
                <b>${country.name.common}</b><br>
                Capital: ${country.capital ? country.capital[0] : "N/A"}<br>
                Population: ${country.population.toLocaleString()}<br>
                Region: ${country.region}
            </p>
        </div>
        `;
    });

    container.innerHTML = htmlOutput;
}

// -------------------------------------------------------
// USERS FETCH
// -------------------------------------------------------
async function fetchUsersData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error(`Network error: ${response.status}`);

        const data = await response.json();
        displayUsersData(data);

    } catch (error) {
        document.getElementById("remote-data-container").innerHTML =
        '<p class="no-results">⚠️ Failed to load data. Please try again later.</p>';
        console.error(error);
    }
}

// -------------------------------------------------------
// DISPLAY USERS
// -------------------------------------------------------
function displayUsersData(usersArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    usersArray.forEach(user => {
        htmlOutput += `
        <p>
            <b>${user.name}</b><br>
            Username: ${user.username}<br>
            Email: <a href="mailto:${user.email}">${user.email}</a><br>
            Website: <a href="http://${user.website}" target="_blank">${user.website}</a><br>
            Location: ${user.address.street}, ${user.address.city}
        </p>
        `;
    });

    container.innerHTML = htmlOutput;
}

// -------------------------------------------------------
// RICK & MORTY FETCH
// -------------------------------------------------------
async function fetchRMData(name = "") {
    try {
        const url = name
            ? `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`
            : `https://rickandmortyapi.com/api/character`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            document.getElementById("remote-data-container").innerHTML =
            `No characters found matching "${name}".`;
            return;
        }

        displayRMData(data.results);

    } catch (error) {
        document.getElementById("remote-data-container").innerHTML =
        `⚠️ Could not load data. Please try again.`;
        console.error(error);
    }
}

// -------------------------------------------------------
// DISPLAY RICK & MORTY
// -------------------------------------------------------
function displayRMData(rmArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    rmArray.forEach(character => {
        htmlOutput += `
        <div style="border:1px solid #ccc;padding:12px;border-radius:6px;">
            <img src="${character.image}" width="150">
            <p>
                <b>${character.name}</b><br>
                Status: ${character.status}
            </p>
        </div>
        `;
    });

    container.innerHTML = htmlOutput;
}

// -------------------------------------------------------
// BUTTON CLICK HANDLER
// -------------------------------------------------------
document.getElementById("button-container").addEventListener("click", function(e) {
    const regionSection = document.getElementById("section-countries");
    const rmFilter = document.getElementById("filter-rm");

    if (e.target.id === "btn-countries") {
        regionSection.style.display = "block";  // show countries dropdown
        rmFilter.style.display = "none";        // hide RM filter
        regionSelect.value = "europe";          // default selection
        fetchCountriesData("europe");
    } else if (e.target.id === "btn-users") {
        regionSection.style.display = "none";   // hide countries dropdown
        rmFilter.style.display = "none";        // hide RM filter
        fetchUsersData();
    } else if (e.target.id === "btn-rm") {
        regionSection.style.display = "none";   // hide countries dropdown
        rmFilter.style.display = "block";       // show RM filter
        document.getElementById("characterSearch").value = "";
        document.getElementById("remote-data-container").innerHTML = "";
        fetchRMData();
    }
});

// -------------------------------------------------------
// LIVE SEARCH (Rick & Morty)
let timer;
const characterSearch = document.getElementById("characterSearch");
characterSearch.addEventListener("input", () => {
    const searchTerm = characterSearch.value.trim();
    clearTimeout(timer);
    timer = setTimeout(() => {
        if (searchTerm === "") {
            document.getElementById("remote-data-container").innerHTML = "";
            return;
        }
        fetchRMData(searchTerm);
    }, 500);
});

// -------------------------------------------------------
// REGION SELECT (Countries)
const regionSelect = document.getElementById("regionSelect");
regionSelect.addEventListener("change", () => {
    fetchCountriesData(regionSelect.value);
});

// Load default region on page load
window.addEventListener("load", () => {
    regionSelect.value = "europe";
});