import React, { useEffect, useState } from 'react';
import { FetchApi } from '../../util/fetchApi';
import { homePageUrl, categories } from '../../util/service-urls';

import {
  GridCubics,
  BrandSlider,
  BestSeller,
  MemoizedProduct,
  Blogs,
  MainSliderMemo,
  CheckModal
} from '../index';
import MyModal from "../Modal/MyModal";
const Homepage = (props) => {
  const [homePageData, sethomePageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await FetchApi.get(`${homePageUrl}`);
        if (mounted) {
          if (result.errors) {
            setIsError(result.errors)
          } else {
            sethomePageData(result.data)
          }
        }
      } catch (e) {
        setIsError('something went wrong');
      }
      setIsLoading(false);
    };
    fetchData();
    return () => mounted = false;
  }, []);

  useEffect(() => {
      if (props.location.data && props.location.data.message) {
          setModalTitle("Newsletter");
          setModalMessage(props.location.data.message);
          setModalShow(true);
      }else if(props.location.errors){
          setModalTitle("Newsletter");
          setModalMessage(props.location.errors[0]['message']);
          setModalShow(true);
      }
  }, [props]);
  const Product = {}; const Banners = {}; const Brands = {}
  if (homePageData) {
    Object.keys(homePageData).forEach((key) => {
      if (key === 'newProducts' || key === 'featuredProducts') {
        Product[key] = homePageData[key]
      }
    })
    Object.keys(homePageData).forEach((key) => {
      if (key === 'banners') {
        Banners[key] = homePageData[key]
      }
    })
    Object.keys(homePageData).forEach((key) => {
      if (key === 'brands') {
        Brands[key] = homePageData[key]
      }
    })
  }
//poxel
  return (
    <>
      <MyModal
        message = {modalMessage}
        title = {modalTitle}
        show = {modalShow}
        setShowParent={setModalShow}
      />
      <MainSliderMemo
        isLoading={isLoading}
        Banners={Banners}
      />
      
      <GridCubics />
      <BrandSlider
        Brands={Brands}
        isLoading={isLoading}
      />
      <MemoizedProduct
        title='New Products'
        productType='newProducts'
        Product={Product}
        isLoading={isLoading}
      />
      <BestSeller />
      <MemoizedProduct
        title='Featured Products'
        productType='featuredProducts'
        Product={Product}
        isLoading={isLoading}
      />
      <Blogs />
    </>
  )
}
export default Homepage;

