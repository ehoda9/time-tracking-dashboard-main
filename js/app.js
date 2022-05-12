const li = document.querySelectorAll('li');
const filePath = '../data.json';
const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];
update('default')

li.forEach(e => {
    e.addEventListener('click', () => {
        li.forEach(e => {
            e.classList.remove('active');
        })
        e.classList.add('active');
        update(e.dataset.update);
    });

});
function update(option) {
    const card1_cur = document.querySelector('.card1 .data__time');
    const card1_prev = document.querySelector('.card1 .data__last');
    const card2_cur = document.querySelector('.card2 .data__time');
    const card2_prev = document.querySelector('.card2 .data__last');
    const card3_cur = document.querySelector('.card3 .data__time');
    const card3_prev = document.querySelector('.card3 .data__last');
    const card4_cur = document.querySelector('.card4 .data__time');
    const card4_prev = document.querySelector('.card4 .data__last');
    const card5_cur = document.querySelector('.card5 .data__time');
    const card5_prev = document.querySelector('.card5 .data__last');
    const card6_cur = document.querySelector('.card6 .data__time');
    const card6_prev = document.querySelector('.card6 .data__last');
    if (option == 'default') {
        card1_cur.innerHTML = `${data[0].timeframes.daily.current}hrs`;
        card1_prev.innerHTML = `Last Week - ${data[0].timeframes.daily.previous}hrs`;
        card2_cur.innerHTML = `${data[1].timeframes.daily.current}hrs`;
        card2_prev.innerHTML = `Last Week - ${data[1].timeframes.daily.previous}hrs`;
        card3_cur.innerHTML = `${data[2].timeframes.daily.current}hrs`;
        card3_prev.innerHTML = `Last Week - ${data[2].timeframes.daily.previous}hrs`;
        card4_cur.innerHTML = `${data[3].timeframes.daily.current}hrs`;
        card4_prev.innerHTML = `Last Week - ${data[3].timeframes.daily.previous}hrs`;
        card5_cur.innerHTML = `${data[4].timeframes.daily.current}hrs`;
        card5_prev.innerHTML = `Last Week - ${data[4].timeframes.daily.previous}hrs`;
        card6_cur.innerHTML = `${data[5].timeframes.daily.current}hrs`;
        card6_prev.innerHTML = `Last Week - ${data[5].timeframes.daily.previous}hrs`;
    }
    if (option == 1) {
        card1_cur.innerHTML = `${data[0].timeframes.daily.current}hrs`;
        card1_prev.innerHTML = `Last Week - ${data[0].timeframes.daily.previous}hrs`;
        card2_cur.innerHTML = `${data[1].timeframes.daily.current}hrs`;
        card2_prev.innerHTML = `Last Week - ${data[1].timeframes.daily.previous}hrs`;
        card3_cur.innerHTML = `${data[2].timeframes.daily.current}hrs`;
        card3_prev.innerHTML = `Last Week - ${data[2].timeframes.daily.previous}hrs`;
        card4_cur.innerHTML = `${data[3].timeframes.daily.current}hrs`;
        card4_prev.innerHTML = `Last Week - ${data[3].timeframes.daily.previous}hrs`;
        card5_cur.innerHTML = `${data[4].timeframes.daily.current}hrs`;
        card5_prev.innerHTML = `Last Week - ${data[4].timeframes.daily.previous}hrs`;
        card6_cur.innerHTML = `${data[5].timeframes.daily.current}hrs`;
        card6_prev.innerHTML = `Last Week - ${data[5].timeframes.daily.previous}hrs`;
    }
    if (option == 2) {
        card1_cur.innerHTML = `${data[0].timeframes.weekly.current}hrs`;
        card1_prev.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
        card2_cur.innerHTML = `${data[1].timeframes.weekly.current}hrs`;
        card2_prev.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
        card3_cur.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
        card3_prev.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
        card4_cur.innerHTML = `${data[3].timeframes.weekly.current}hrs`;
        card4_prev.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
        card5_cur.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
        card5_prev.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
        card6_cur.innerHTML = `${data[5].timeframes.weekly.current}hrs`;
        card6_prev.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
    }
    if (option == 3) {
        card1_cur.innerHTML = `${data[0].timeframes.monthly.current}hrs`;
        card1_prev.innerHTML = `Last Week - ${data[0].timeframes.monthly.previous}hrs`;
        card2_cur.innerHTML = `${data[1].timeframes.monthly.current}hrs`;
        card2_prev.innerHTML = `Last Week - ${data[1].timeframes.monthly.previous}hrs`;
        card3_cur.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
        card3_prev.innerHTML = `Last Week - ${data[2].timeframes.monthly.previous}hrs`;
        card4_cur.innerHTML = `${data[3].timeframes.monthly.current}hrs`;
        card4_prev.innerHTML = `Last Week - ${data[3].timeframes.monthly.previous}hrs`;
        card5_cur.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
        card5_prev.innerHTML = `Last Week - ${data[4].timeframes.monthly.previous}hrs`;
        card6_cur.innerHTML = `${data[5].timeframes.monthly.current}hrs`;
        card6_prev.innerHTML = `Last Week - ${data[5].timeframes.monthly.previous}hrs`;
    }
}