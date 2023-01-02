import {
  ServicesListing,
  ServicesListItem,
  ServicesListRoot,
} from '../../styles/components/services';
import { SectionHeadingProps, ServiceProps } from '../../types/global';
import { CloudinaryImage, SectionHeading } from '../_common';

export const ServicesList: React.FC<{
  title: SectionHeadingProps;
  services: ServiceProps[];
}> = ({ title, services }) => {
  return (
    <ServicesListRoot>
      <SectionHeading heading={title.heading} />
      <ServicesListing>
        {services
          .sort((a, b) => a.id - b.id)
          .map((service) => {
            const {
              id,
              attributes: { image, title, description },
            } = service;

            return (
              <ServicesListItem key={id}>
                <CloudinaryImage
                  src={image.data.attributes.url}
                  alt={title}
                  height={image.data.attributes.height}
                  width={image.data.attributes.width}
                />
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </ServicesListItem>
            );
          })}
      </ServicesListing>
    </ServicesListRoot>
  );
};
