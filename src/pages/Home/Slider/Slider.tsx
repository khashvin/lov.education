import React, {useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../rootReducer";
import {getBanners} from "../../../actions/banner.actions";

const Slider = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: IRootState) => state.banner.loading);
  const banners = useSelector((state: IRootState) => state.banner.banners);

  useEffect(() => {
    if(banners.length === 0) {
      dispatch(getBanners());
    }
    // eslint-disable-next-line
  }, [dispatch])

  return (
    <section className="main-slider">
      {loading ?
          <img className="mx-auto d-block my-5" alt="loading" src="/images/loading.gif" width={64} height={64}/>
        : null}
        <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} swipeable={true} stopOnHover={false} interval={3000} transitionTime={1000} autoPlay>
          {banners.map((banner) => {
            return (
              <div key={banner.id}>
                <img src={banner.banner.data?.full_url}  alt={banner.name}/>
              </div>
            )
          })}
        </Carousel>
    </section>
  )
}

export default Slider;