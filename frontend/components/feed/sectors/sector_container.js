// Import React Redux
import { connect } from 'react-redux';

// Import Local Directory Files
import Sectors from './sectors';


// mapStateToProps 
const mapStateToProps = (state) => ({
  sectors: state.entities.sectors 
});

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  receiveAllSectors: () => dispatch(receiveAllSectors()) 
});


export default connect(mapStateToProps, mapDispatchToProps)(Sectors); 