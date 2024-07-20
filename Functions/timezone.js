const readline = require('readline');
const { DateTime } = require('luxon');

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to fetch time zone based on country name (mock implementation)
function fetchTimeZone(countryName) {
  // Example mapping of country names to time zones
  const timeZoneMap = {
    'Russia': 'Europe/Moscow',
    'USA': 'America/New_York', // Example, replace with your mappings
    'India': 'Asia/Kolkata',   // Example, replace with your mappings
    'Spain': 'Europe/Madrid',
    'Australia': 'Australia/Sydney',
    'Japan': 'Asia/Tokyo',
    'Argentina': 'America/Argentina/buenos_Aires',
    'Greenland': 'America/Godthab',
    'Egypt': 'Africa/Cairo',
    'Kenya': 'Africa/Nairobi'
    // Add more mappings as needed
  };

  return timeZoneMap[countryName];
}

// Ask user for country name input
rl.question('Enter a country name: ', (countryName) => {
  // Fetch time zone based on country name
  const timeZone = fetchTimeZone(countryName);

  if (timeZone) {
    const currentTime = DateTime.now().setZone(timeZone);
    console.log(`Current time in ${countryName} (${timeZone}): ${currentTime.toLocaleString(DateTime.DATETIME_FULL)}`);
  } else {
    console.log(`Time zone not found for ${countryName}`);
  }

  rl.close();
});



  
