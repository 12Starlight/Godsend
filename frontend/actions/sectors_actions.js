// Import Local Directory Files
import * as SectorApiUtil from '../utils/sectors_api_util';

// Import Constants
export const GET_ALL_SECTORS = 'GET_ALL_SECTORS';
export const GET_ALL_SECTOR_ERRORS = 'GET_ALL_SECTOR_ERRORS';


// Regular Action Creators
const getAllSectors = (sectors) => ({
  type: GET_ALL_SECTORS,
  sectors
});

const getAllSectorErrors = (errors) => ({
  type: GET_ALL_SECTOR_ERRORS = 'GET_ALL_SECTOR_ERRORS',
  errors 
});

// Thunk Action Creators
export const receiveAllSectors = () => dispatch => (
  SectorApiUtil.getSectorsFeed().then(
    sectorsResponse => dispatch(getAllSectors(sectorsResponse)),
    errors => dispatch(getAllSectorErrors(errors))
  )
);