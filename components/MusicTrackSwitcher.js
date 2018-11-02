import React from 'react'
import data from './MusicList'
import MusicTrack from './MusicTrack'

class MusicTrackSwitcher extends React.Component {

    componentDidMount() {
        if (this.props.jsShow) {
            this.refs.track.style.display = 'unset';
        }
    }

    render () {
        const { track, jsShow } = this.props;
        const track_data = data[track];
    
        return (
            <div style={ {display: jsShow? 'none' : undefined} } ref="track">
                <MusicTrack {...track_data}></MusicTrack>
            </div>
        );
    }
}


export default MusicTrackSwitcher