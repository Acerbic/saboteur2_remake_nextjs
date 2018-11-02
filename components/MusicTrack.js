import React from 'react';

class MusicTrack extends React.Component {
    componentDidUpdate() {
        this.refs.audio.load();
    }

    render() {
        const { audiofile, image, text } = this.props;
        const mp3file = `static/audio/${audiofile}.mp3`;
        const oggfile = `static/audio/${audiofile}.ogg`;
        return (
            <section className="subpage">
                <div className="player">
                    <audio controls ref="audio">
                        <source src={oggfile} type="audio/ogg" />
                        <source src={mp3file} type="audio/mp3" />

                        <p className="update-warning">
                            Обновите браузер, или используйте браузер совместимый с HTML5, чтобы прослушать музыку. Также вы можете 
                            скачать звуковой файл <a href={oggfile}>OGG</a> либо <a href={mp3file}>MP3</a>
                            и использовать ваш системный плеер.
                        </p>

                    </audio>
                </div>
                <img src={image.src} className={ text ? "left" : "" } alt={image.alt} width={image.width} height={image.height} />
                { text }
                
                <style jsx>{`
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
                `}</style>
            </section>
        )
    }
}

export default MusicTrack;