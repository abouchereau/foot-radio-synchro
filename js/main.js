class Main {

    audioElement = null;
    radios = [
        {"name": "France Bleu Paris", "flow":"https://icecast.radiofrance.fr/fb1071-midfi.mp3"},
        {"name": "RMC", "flow":"https://audio.bfmtv.com/rmcradio_128.mp3"},
        {"name": "RTL", "flow":"https://streamer-02.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg"}
    ];
    curRadioIndex = null;
    delay = 0;
    isPaused = true;
    interval = null;
    pauseStartTime = null;


    setRadio(id) {
        if (this.audioElement != null) {
            this.audioElement.pause();
            this.audioElement.currentTime = 0;
        }
        this.curRadioIndex = id;
        this.audioElement = new Audio(this.radios[id].flow);
        this.audioElement.play();
        this.isPaused = false;
        this.delay = 0;
    }

    addDelay(seconds) {
        this.delay += seconds;
        this.audioElement.currentTime = this.audioElement.currentTime - seconds;
    }

    pause() {
        this.isPaused = true;
        this.audioElement.pause();
        this.interval = setInterval(()=>{
            this.delay += 0.1;
        },100);
    }

    resume() {
        this.isPaused = false;
        this.audioElement.play();
        clearInterval(this.interval);
    }
}