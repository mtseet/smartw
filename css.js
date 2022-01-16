

var clockfaces = ['analog','blackanalog',
'modernanalog','digital',
'reddigital','whitedigital']

var currentClockface=localStorage.getItem('clockface');
if(!currentClockface)
	currentClockface='digital'

document.write(`<link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css" type="text/css">`)
document.write(`<link rel="stylesheet" href="clockfaces/css/clock`+currentClockface+`.css" type="text/css">`)
document.write(`<link rel="stylesheet" href="css/style.css" type="text/css">`)
document.write(`<link rel="stylesheet" href="css/menu.css" type="text/css">`)
document.write(`<link rel="stylesheet" href="css/today.css" type="text/css">`)
document.write(`<link rel="stylesheet" href="css/timer.css" type="text/css">`)
document.write(`<link rel="stylesheet" href="css/alarms.css" type="text/css">`)
document.write(`<link rel="stylesheet" href="css/settings.css" type="text/css">`)
