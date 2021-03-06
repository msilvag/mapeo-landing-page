import { FC } from 'react';
import { MapeoService } from '../lib/types';
import SliderWithSection, { SliderContentProps } from './Slider/withSection';

type Props = {
  services: MapeoService[],
}

const mapServicesToSliderContent = (
  services: MapeoService[],
) : SliderContentProps[] => services.map((service, index) => ({
  id: index,
  serviceTitle: service.name,
  list: service.description,
  image: {
    src: service.imageUrl,
    alt: service.name,
    width: 720,
    height: 528,
  },
}));

const SolutionsPersons : FC<Props> = ({ services } : Props) => (
  <SliderWithSection
    sliderContentList={mapServicesToSliderContent(services)}
    className="soluciones soluciones--purple"
    titleNode={(
      <div className="soluciones__title appear_left">
        <h2>
          Soluciones para conquistar
          {' '}
          <span>&#183; a tus colaboradores &#183;</span>
        </h2>
      </div>
    )}
    targetId="personas"
  />
);

export default SolutionsPersons;
