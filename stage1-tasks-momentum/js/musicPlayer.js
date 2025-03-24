export default class MusicPlayer {
    constructor(allMusic) {
        this.musicIndex = 0
        this.allMusic = allMusic
        this.currentMusic = new Audio(this.allMusic[this.musicIndex])
        this.isPaused = true
    }

    playAudio() {
        this.currentMusic.play();
        this.isPaused = false
    }

    pauseAudio() {
        this.currentMusic.pause();
        this.isPaused = true
    }

    playNextAudio() {
        this.musicIndex++

        if(this.musicIndex > this.allMusic.length - 1) {
            this.musicIndex = 0
        }

        this.currentMusic.src = this.allMusic[this.musicIndex]
        this.playAudio()
    }

    playPrevAudio() {
        this.musicIndex--

        if(this.musicIndex < 0) {
            this.musicIndex = 3
        }

        this.currentMusic.src = this.allMusic[this.musicIndex]
        this.playAudio()
    }
}