
window.addEventListener('DOMContentLoaded', function() {

    'use sctict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i <tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent (b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }  
        }
    });

    //TIMER
    let deadline = "2020-04-18";
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/(1000*60*60));
            /* 
            hours = Math.floor(t/(1000*60*60) % 24),
            days = Math.floor(t/(1000*60*60*24) % )
            */
           return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
           };
    }

    function setClock(id, andtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(andtime);
            if (t.hours == 1 || t.hours == 2 || t.hours == 3 ||
                t.hours == 4 || t.hours == 5 || t.hours == 6 ||
                t.hours == 7 || t.hours == 8 || t.hours == 9 ||
                t.hours == 0) {
                    hours.textContent = '0' + t.hours;
                } else {hours.textContent = t.hours;}

            if (t.minutes == 1 || t.minutes == 2 || t.minutes == 3 ||
                t.minutes == 4 || t.minutes == 5 || t.minutes == 6 ||
                t.minutes == 7 || t.minutes == 8 || t.minutes == 9 ||
                t.minutes == 0) {
                    minutes.textContent = '0' + t.minutes;
                } else {minutes.textContent = t.minutes;}
            
            if (t.seconds == 1 || t.seconds == 2 || t.seconds == 3 ||
                t.seconds == 4 || t.seconds == 5 || t.seconds == 6 ||
                t.seconds == 7 || t.seconds == 8 || t.seconds == 9 ||
                t.seconds == 0) {
                    seconds.textContent =  '0' + t.seconds;        
                } else {seconds.textContent = t.seconds;}

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    
    setClock('timer', deadline);

}); 
