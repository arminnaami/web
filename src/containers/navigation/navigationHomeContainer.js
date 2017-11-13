import {connect} from 'react-redux';

import NavigationHome from '../../components/navigation/navigationHome';
import {getPlaylists} from "../../actions/trendingActions";
import {playSong} from "../../actions/playerActions";

function mapStateToProps(state) {
  return {
    playlists: state.trending.playlists
  }
}

export default connect(
  mapStateToProps,
  {
    getPlaylists: getPlaylists,
    playSong: playSong
  }
)(NavigationHome);
