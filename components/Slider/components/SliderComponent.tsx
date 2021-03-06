import { FC, useEffect } from 'react';
import Spinner from '../../common/Spinner';
import useSlider from '../hooks/useSlider';
import { SliderProps } from '../lib/types';
import SliderControls from './SliderControls';
import SliderImages from './SliderImages';

const SliderComponent : FC<SliderProps> = (props : SliderProps) => {
  const { imageList, className } = props;
  const { setTotalPages } = useSlider();

  useEffect(() => {
    setTotalPages(imageList.length);
  }, [imageList, setTotalPages]);
  return (imageList.length === 0)
    ? (
      <div className={`slider ${className}`}>
        <Spinner />
      </div>
    )
    : (
      <div className={`slider ${className}`}>
        <SliderImages imageList={imageList} />
        <div id="controlContainer" className="slider__control-box">
          <SliderControls />
        </div>
      </div>
    );
};

export default SliderComponent;
