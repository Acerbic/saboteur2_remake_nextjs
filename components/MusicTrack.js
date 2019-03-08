/**
 * Renders a page fragment, describing a Music Track. Features an image,
 * optional text description and an audio player to play the music in browser.
 */

import React from 'react';

class MusicTrack extends React.Component {

    constructor(props) {
        super(props);

        this.audioRef = React.createRef();
    }
    /**
     * After tracks switched (and props updated), causing different "src" in
     * <audio>, the player object still retains the previous sound file in use.
     * This forces to reevaluate "src" attribute and load teh new file
     */
    componentDidUpdate() {
        this.audioRef.current.load();
    }

    render() {
        const { audiofile, image, text } = this.props;
        const mp3file = `static/audio/${audiofile}.mp3`;
        const oggfile = `static/audio/${audiofile}.ogg`;
        return (
            <section className="subpage">
                <div className="player">
                    <audio controls ref={this.audioRef}>
                        <source src={oggfile} type="audio/ogg" />
                        <source src={mp3file} type="audio/mp3" />

                        <p className="update-warning">
                            Обновите браузер, или используйте браузер совместимый с HTML5, чтобы прослушать музыку. Также вы можете 
                            скачать звуковой файл <a href={oggfile}>OGG</a> либо <a href={mp3file}>MP3</a>
                            и использовать ваш системный плеер.
                        </p>

                    </audio>
                </div>
                <div id="track-info">
                    <img src={image.src} className={ text ? "left" : "" } alt={image.alt} width={image.width} height={image.height} />
                    { text }
                </div>
                
                <style jsx global>{`
                    .subpage {
                        display: block;
                        text-align: left;
                    }
                    .subpage::after {
                        content: "";
                        display: table;
                        clear: both;
                    }
                    .subpage audio {
                        display: block;
                        margin: 0 auto;
                    }
                    .subpage img {
                        display: block;
                        margin: 0 auto;
                    }
                    .subpage img.left {
                        float: left;
                        max-width: 50%;
                        margin-right: 1em;
                    }
                    div.player {
                        height: 54px;
                        overflow: visible;
                        margin-bottom: 0.5em;
                    }
                    .subpage p.center {
                        text-align: center;
                    }
                    p.update-warning {
                        padding: 10px;
                        margin: 0;
                        background: rgb(38, 59, 59);
                    }
                    p.update-warning a {
                        color: chocolate;
                    }

                    /* make player fixed when in iframe */
                    html.noJs .subpage .player {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                    }
                    html.noJs .subpage audio {
                        margin: 0 auto;
                    }
                    html.noJs .subpage #track-info {
                        padding-top: 64px;
                        height: 100%;
                        box-sizing: border-box;
                    }

                    /* one column when Js enabled (i.e. not in iframe) */
                    @media (max-height: 415px) {
                        html.hasJs .subpage audio {
                            max-width: 50%;
                        }
                        html.hasJs .subpage img, html.hasJs .subpage img.left {
                            float: none;
                            max-width: unset;
                            max-height: 200px;
                            width: auto;
                            max-width: 50%;
                            margin: 0 auto;
                        }
                        html.hasJs .subpage {
                            text-align: right;
                        }

                        html.noJs .subpage {
                            position: absolute;
                            top: 0; left: 0;
                            right: 0; bottom: 0;
                        }
                        html.noJs .subpage img,
                        html.noJs .subpage img.left {
                            max-height: 100%;
                            height: auto;
                            width: auto;
                        }
                    }
                `}</style>
            </section>
        )
    }
}

export default MusicTrack;