import { withRouter } from 'next/router'
import MusicTrackSwitcher from "../components/MusicTrackSwitcher";

class MusSubpage extends React.Component {
  render() {
    const {router} = this.props
    const track = router.query.track ? router.query.track : "sab2_zx48k_sp";
    return <MusicTrackSwitcher track={track}></MusicTrackSwitcher>
  }
}

export default withRouter(MusSubpage)