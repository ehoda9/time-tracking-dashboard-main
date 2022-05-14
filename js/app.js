const cards = document.querySelector('.car');
fetch("../data.json")
    .then(res => res.json())
    .then(d => { return d; })
    .then(r => {
        clicked(r);
        cards.childElementCount === 0 ? document.querySelector('.weekly').click() : ' ';
    });
function clicked(data) {
    const btns = document.querySelectorAll('li');
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btns.forEach(e => e.classList.remove('active'));
            switch (btn.className) {
                case 'daily':
                    cards.innerHTML = ''
                    createBoxes(data, 'daily', 'day');
                    btn.classList.add('active');
                    break;
                case 'weekly':
                    cards.innerHTML = ''
                    createBoxes(data, 'weekly', 'week');
                    btn.classList.add('active');
                    break;
                case 'monthly':
                    cards.innerHTML = ''
                    createBoxes(data, 'monthly', 'month');
                    btn.classList.add('active');
                    break;
            };
        });
    });
};
function createBoxes(array, time, title) {
    array.forEach(d => {
        const box = ` 
        <div class="card ${d.title.toLowerCase()}">
        <div class="card__header"></div>
        <div class="card__content">
          <div class="content__header">
            <h2 class="card__title">${d.title}</h2>
            <div class="menu">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <div class="card__data">
            <h1 class="data__time">${d.timeframes[time].current}hrs</h1>
            <p class="data__last">last-${title} - ${d.timeframes[time].previous}hrs</p>
          </div>
        </div>
       </div>`;
        cards.innerHTML += box;
    });
};