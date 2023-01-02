import {
  LocationsBody,
  LocationsGrid,
  LocationsInfo,
  LocationsRoot,
} from '../../styles/components/contact';
import { Location } from '../../types/contact';
import { SectionHeading } from '../_common';

export const Locations: React.FC<{ locations: Location[] }> = ({
  locations,
}) => {
  return (
    <LocationsRoot>
      <SectionHeading
        heading='Locations'
        subheading='Visit Our Stores'
        type='half'
      />
      <LocationsBody>
        <LocationsInfo>
          <p>Find us at these locations.</p>

          <div>
            <h4>Email</h4>
            <p>dananz@gmail.com</p>
          </div>

          <div>
            <h4>Phone</h4>
            <p>+62 815 002 1000</p>
          </div>
        </LocationsInfo>

        <LocationsGrid>
          {locations.map((location) => {
            const {
              id,
              attributes: { name, description },
            } = location;

            return (
              <div key={id}>
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </LocationsGrid>
      </LocationsBody>
    </LocationsRoot>
  );
};
