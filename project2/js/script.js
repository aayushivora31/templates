let items = document.querySelectorAll('.number');


let updateCount = (el) => {
    let value = parseInt(el.dataset.value);
    let increment = Math.ceil(value / 100);
    let initialValue = 0;

    let increaseCount = setInterval(() => {
        initialValue += increment;


        if (initialValue > value) {
            el.textContent = `${value}`;
            clearInterval(increaseCount);
            return;
        }
        el.textContent = `${initialValue}`;
    }, 1);
};

items.forEach((item) => {
    updateCount(item);
});



const btns = document.querySelectorAll('.tab-btn');
        const about = document.querySelector('.about');
        const articles = document.querySelectorAll('.content')

        about.addEventListener('click',function(e){
            const id=e.target.dataset.id;
            if(id){
                btns.forEach(function(btn){
                    btn.classList.remove('active');
                    e.target.classList.add('active');
                });
                articles.forEach(function(article){
                    article.classList.remove('active');
                });
                const element=document.getElementById(id);
                    element.classList.add('active');
                
            }
        });