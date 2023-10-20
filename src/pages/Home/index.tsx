import { Wrapper } from './styled';
import { Viewer, GeoJsonDataSource } from 'resium';
// import { Cartesian3 } from 'cesium';

const data = {
  type: 'Feature',
  properties: {
    name: 'Coors Field',
    amenity: 'Baseball Stadium',
    popupContent: 'This is where the Rockies play!',
  },
  geometry: {
    type: 'Point',
    coordinates: [-104.99404, 39.75621],
  },
};

const HomeStyled = () => {
  return (
    <Wrapper>
      <Viewer>
        <GeoJsonDataSource data={data} />
      </Viewer>
    </Wrapper>
  );
};

export default HomeStyled;
