class App {

    audioElement = null;
    radios = [
        {"name": "RMC", "flow":"https://audio.bfmtv.com/rmcradio_128.mp3"},
        {"name": "RTL", "flow":"https://streamer-02.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg"},
        {"name": "Europe 1", "flow":"https://europe1.lmn.fm/europe1.mp3"},
        {"name": "[PSG] France Bleu Paris", "flow":"https://icecast.radiofrance.fr/fb1071-midfi.mp3"},
        {"name": "[OM] France Bleu Provence", "flow":"https://direct.francebleu.fr/live/fbprovence-midfi.mp3"},
        {"name": "[OGC Nice] France Bleu Azur", "flow":"https://direct.francebleu.fr/live/fbazur-midfi.mp3"},
        {"name": "[LOSC] France Bleu Nord", "flow":"https://direct.francebleu.fr/live/fbnord-midfi.mp3"},
        {"name": "[Stade Reims] France Bleu Champagne Ardenne", "flow":"https://direct.francebleu.fr/live/fbchampagne-midfi.mp3"},
        {"name": "[Toulouse FC] France Bleu Occitanie", "flow":"https://direct.francebleu.fr/live/fbtoulouse-midfi.mp3"},
        {"name": "[Montpellier HSC] France Bleu Hérault", "flow":"https://direct.francebleu.fr/live/fbherault-midfi.mp3"},
        {"name": "[Lorient/Brest] France Bleu Breizh Izel", "flow":"https://direct.francebleu.fr/live/fbbreizizel-midfi.mp3"},
        {"name": "[FC Nantes] France Bleu Loire Océan", "flow":"https://direct.francebleu.fr/live/fbloireocean-midfi.mp3"},
        {"name": "[Clermont Foot] France Bleu Auvergne", "flow":"https://direct.francebleu.fr/live/fbpaysdauvergne-midfi.mp3"},
    ];
    curRadioIndex = null;
    delay = 0;
    isPaused = true;
    interval = null;
    //copie de la valeur pour binding
    currentTime = null;




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
        setInterval(()=>{
            if (this.audioElement != null) {
                this.currentTime = this.audioElement.currentTime;
            }
        },500);
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