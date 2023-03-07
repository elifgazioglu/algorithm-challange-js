const modifier = s.slice(8,10);
    const time = s.slice(0,8);
    let [hours, minutes, seconds] = time.split(':');
    
    if (hours === '12') {
        hours = '00';
    }
    
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    
    return `${hours}:${minutes}:${seconds}`;