/**
 * This components orchestrates displaying an appropriate musical track
 * based on track code provided. 
 * 
 * - Having this separate from MusicTrack serves separation of concerns.
 * - Having this separate from page-level components (see below) allows for
 *   code reuse.
 * 
 * It is used by two page components: /saboteur2_music and /saboteur2_mus_subpage
 * 
 * 1. If client has Javascript enabled, this component would be working directly
 *    in the "Music" (/saboteur2_music) page, switching tracks without need for
 *    complete page reload.
 * 
 * 2. If client browser works with Javascript disabled, the "Music" page will
 *    have it's embedded MusicTrackSwitcher under 'display:none' style
 *    (invisible). And instead, for every track switch will update an <iframe>
 *    with a page /saboteur2_mus_subpage, which will receive track code as
 *    query parameter, rendering MusicTrackSwitcher on the server.
 */
import React from 'react'
import data from './MusicList'
import MusicTrack from './MusicTrack'

/**
 * Props:
 *      track: string       track id
 */
class MusicTrackSwitcher extends React.Component {

    /**
     * Show component in browser
     */
    render () {
        const track_data = data[this.props.track];
    
        return (
            <div className="music-track-switcher">
                <MusicTrack {...track_data}></MusicTrack>
            </div>
        );
    }
}

export default MusicTrackSwitcher