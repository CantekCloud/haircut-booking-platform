import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import http from "../api/http-common.js";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Booking from "../partials/Booking";
import ImageSlider from '../partials/ImageSlider.jsx';

const StylistDetail = () => {
    let { stylId } = useParams();
    const [stylistDetail, setStylistDetail] = useState({});

    useEffect(() => {
        http.get(`/stylist/${stylId}`).then((res) => {
          setStylistDetail(res.data)
        }).catch(error => {
          console.error('Error fetching stylist:', error.message);
        });
    }, []);

    const serviceNameMapper = (key) => {
        let value = '';
        switch(key) {
            case 'HAIRCUT':
                return 'Haircut';
            case 'HAIR_COLORING':
                return 'Hair Coloring';
            case 'HAIR_STYLING':
                return 'Hair Styling';
            case 'HAIR_TREATMENT':
                return 'Hair Treatment';
            case 'HAIR_REMOVAL':    
                return 'Hair Removal';
            case 'NAIL':
                return 'Nail Care';
            case 'SKIN_CARE':
                return 'Skin Care';
            case 'MAKE_UP':
                return 'Make Up';
            case 'OTHERS':
                return 'Others';
        }
    }

    return (
      <div className="flex flex-col overflow-hidden">
        <Header />
        <div className="text-center pt-24 pb-10">
            
            <h1 className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">{`${stylistDetail.firstName} ${stylistDetail.lastName}`}</span>
            </h1>
            <div className='flex justify-center items-center'>
                <div className='mx-10 w-2/5'>
                    <p className="text-xl font-extrabold text-gray-600">
                        {stylistDetail.description}
                    </p>
                </div>
                <div className='mx-10 w-2/5'> 
                    <span className='text-xl font-extrabold text-gray-600'>Service</span>
                    <div className='flex flex-row justify-center items-center'>
                        {stylistDetail && stylistDetail.serviceTypes ? stylistDetail.serviceTypes.map((service) => {
                            return (
                                <span className='m-2 font-extrabold text-gray-600'>{serviceNameMapper(service.name)}</span>
                            )
                        }) : null}
                    </div>
                    
                </div>
            </div>
            <div className="pb-10">
                <ImageSlider />
            </div>
            <Booking />
        </div>
        <Footer />
      </div>
    )
  };

export default StylistDetail;