const pages = document.querySelectorAll('.page');
const lbutton = document.getElementById('leftButton');
const rbutton = document.getElementById('rightButton');
let currPg = 0;
let currA = 0;
let currS = 0;

const playlist = [
    document.getElementById('Audio1')
];

const soundlist = [
    null,
    document.getElementById('Sound1'),
    document.getElementById('Sound2'),
    document.getElementById('Sound3'),
    document.getElementById('Sound4'),
    document.getElementById('Sound5'),
    document.getElementById('Sound6'),
    document.getElementById('Sound7'),
    document.getElementById('Sound8'),
    document.getElementById('Sound9'),
    document.getElementById('Sound10')
];

function showPage(index) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    pages[index].classList.add('active');
    currS = index;

    startVanta();
}

function nextPage() {
    currPg ++;
    if (currPg >= pages.length) {
        currPg = 0;
    }
    showPage(currPg);
}

function prevPage () {
    currPg --;
    if (currPg < 0) {
        currPg = pages.length - 1;
    }
    showPage(currPg);
}

function stopAllMusic() {
    playlist.forEach(song => {
        song.pause();
        song.currentTime = 0;
    });
}

function stopAllSound() {
    soundlist.forEach(song => {
        song.pause();
        song.currentTime = 0;
    });
}

function updateOST() {
    const activePg = pages[currPg];
    if (activePg.classList.contains('speaker-page')) {
        if (currA > playlist.length) {
            currA = 0;
        }
    }
}

lbutton.addEventListener('click', function(event) {
    prevPage();
    soundlist[currS].play();
});
rbutton.addEventListener('click', function(event) {
    nextPage();
    soundlist[currS].play();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextPage();
        soundlist[currS].play();
    }

    if (event.key === 'ArrowLeft') {
        prevPage();
        soundlist[currS].play();
    }

    if (event.key === 'ArrowUp') {
        const activePg = pages[currPg];
        if (activePg.classList.contains('speaker-page')) {
            stopAllMusic();
            playlist[currA].play();
            currA++;
            if (currA >= playlist.length) {
                currA = 0;
            }
        }
    }

    if (event.key === 'ArrowDown') {
        stopAllMusic();
    }
});

//Cool background

let vantaEffect = null;

function startVanta() {
    if (vantaEffect || !window.VANTA) return;

    vantaEffect = VANTA.BIRDS({
        el: document.body,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0x5b3a69,
        colorMode: "varianceGradient"
    });
}

