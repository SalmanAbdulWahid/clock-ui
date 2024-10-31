var updateClock = function() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Determine AM or PM suffix
    var ampm = hours >= 12 ? 'PM' : 'AM';
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? String(hours).padStart(2, '0') : '12'; // the hour '0' should be '12'

    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = timeString;
};

setInterval(updateClock, 1000);
updateClock();
