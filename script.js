const a1 = document.querySelector("#sf");
a1.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector("#sci-fi");

    window.scrollTo(
        {
            top: target.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        }
    );
});

const a2 = document.querySelector("#sh");
a2.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector("#self-help");

    window.scrollTo(
        {
            top: target.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        }
    );
});

const a3 = document.querySelector("#thr");
a3.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector("#thriller");

    window.scrollTo(
        {
            top: target.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        }
    );
});