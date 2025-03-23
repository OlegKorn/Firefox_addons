function test() {
    let x = document.getElementsByClassName('post__btn post__btn_type_hide icon desktop');

    for (let i = 0; i < x.length; i++) {
        x[i].style.width = '50px';
        x[i].style.height = '50px';
        x[i].style.backgroundColor = '#D2B48C';
        x[i].style.fill= '#D2B48C';
    }
};

test();

document.addEventListener('scroll', () => {
    test();
}) 



