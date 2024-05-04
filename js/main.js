class Main {

    audioElement = null;
    radios = [
        {"name": "France Bleu Paris", "flow":"https://icecast.radiofrance.fr/fb1071-midfi.mp3"},
        {"name": "RMC", "flow":"https://audio.bfmtv.com/rmcradio_128.mp3"},
        {"name": "RTL", "flow":"https://streamer-02.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg"}
    ];
    curRadioIndex = null;
    delay = 0;



    setRadio(id) {
        if (this.audioElement != null) {
            this.audioElement.pause();
            this.audioElement.currentTime = 0;
        }
        this.curRadioIndex = id;
        this.audioElement = new Audio(this.radios[id].flow);
        this.audioElement.play();
        this.delay = 0;

    }
}