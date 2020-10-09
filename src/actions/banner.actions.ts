import api from "../api";

export const ACTION_TYPES = {
  GET_BANNERS: "GET_BANNERS",
}

const bannerEndpoint = 'items/banner';
const bannerFields = 'fields=id,name,banner.data';

export const getBanners = () => {
  return {
    type: ACTION_TYPES.GET_BANNERS,
    payload: api.get(`${bannerEndpoint}?${bannerFields}`),
  }
}