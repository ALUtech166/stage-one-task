function updateDateAndTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();

    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    dayOfWeekElement.textContent = `Current Day: ${daysOfWeek[currentDate.getUTCDay()]}`;
    utcTimeElement.textContent = `Current UTC Time: ${currentDate.toISOString().split('T')[1].substring(0, 8)}`;
}

// Call the function when the page loads
window.onload = updateDateAndTime;
