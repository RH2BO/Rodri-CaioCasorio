(() => {
    const audio = document.getElementById('bg-music');
    const control = document.getElementById('audio-control');
    const muteKey = 'weddingMusicMuted';
    let isMuted = localStorage.getItem(muteKey) === 'true';

    audio.muted = isMuted;

    function updateControl() {
        control.textContent = isMuted ? '🔇' : '🔊';
        control.classList.toggle('is-error', isMuted);
        control.classList.toggle('is-success', !isMuted);
        control.setAttribute('aria-label', isMuted ? 'Turn music on' : 'Turn music off');
        control.setAttribute('aria-pressed', String(isMuted));
    }

    function playMusic() {
        if (isMuted || !audio.paused) {
            return;
        }

        audio.play().then(() => {
            control.title = 'Turn music off';
        }).catch(error => {
            if (error.name === 'NotAllowedError') {
                control.title = 'Tap to start music';
                return;
            }

            control.title = 'Music could not be played';
            console.error('Background music could not be played.', error);
        });
    }

    window.startSiteMusic = playMusic;

    control.addEventListener('click', () => {
        isMuted = !isMuted;
        localStorage.setItem(muteKey, String(isMuted));
        audio.muted = isMuted;

        if (isMuted) {
            audio.pause();
        } else {
            playMusic();
        }

        updateControl();
    });

    updateControl();

    if (!isMuted && audio.dataset.startOnClick !== 'true') {
        playMusic();
        document.addEventListener('pointerdown', playMusic, { once: true });
        document.addEventListener('keydown', playMusic, { once: true });
    }
})();
