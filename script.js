const nav = document.getElementById('mynav');

window.onscroll = () => {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        nav.style.backgroundColor = '#7bb2c2'
    }
    else {
        nav.style.backgroundColor = '#ffffff00'
    }

};