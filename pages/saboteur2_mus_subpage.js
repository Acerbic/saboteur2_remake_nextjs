/**
 * This is a 'subpage' - it is loaded into <iframe> on the "Music" page
 * (/saboteur2_music) when Javascript is off in the browser.
 */

import { withRouter } from 'next/router'
import MusicTrackSwitcher from "../components/MusicTrackSwitcher";

class MusSubpage extends React.Component {
  render() {
    // getting query argument 'track' - track id
    const {router} = this.props
    const track = router.query.track ? router.query.track : "sab2_zx48k_sp";
    return <MusicTrackSwitcher track={track}></MusicTrackSwitcher>
  }
}

export default withRouter(MusSubpage)