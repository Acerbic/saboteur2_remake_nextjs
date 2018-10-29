import data from './MusicList'
import MusicTrack from './MusicTrack'

export default ({ track }) => {

    const track_data = data[track];
    
    return (
        <MusicTrack {...track_data}></MusicTrack>
    );
}