const c_timer = document.querySelector('.circle_timer');
const circle = document.querySelector('.timer__circle_ring');
const second = document.querySelector('.timer_number');
const time = c_timer.dataset.time;

const radius = circle.r.baseVal.value;
const circumference = 2*Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

let start = setInterval(()=>{
    if (c_timer.classList.contains('active')) {timer(time); clearInterval(start)}
}, 100)

function timer(seconds){
    let percent = 0;

    let interval = setInterval(()=>{
        percent += 10/seconds;
        setProgress(percent);

        second.textContent = Math.floor(seconds * percent/100);

        if(percent >= 100){
            clearInterval(interval)
            c_timer.classList.add('finished');
        }
    }, 100)
}


function setProgress(percent){
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

/* <div class="circle_timer">
    <svg class="timer__circle" width="170" height="170">
        <!-- cx, cy = w/2 -->
        <!-- r = cx - sw*2 -->
        <circle class="timer__circle_ring" stroke="white" stroke-width="30" cx="85" cy="85" r="55" fill="transparent">
    </svg>

    <div class="timer_number">0</div>
</div> */