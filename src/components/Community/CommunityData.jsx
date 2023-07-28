import React, { useState } from "react";
import Testimonials from "../Home/Testimonial";
import { COMMUNITY_DATA, TESTIMONIALS } from "/src/constants/index";
import BannerContainer from "./BannerContainer";
import CommunityDetails from "./CommunityDetails";
import CommunityItem from "./CommunityItem";
import HomeCommunity from '../Home/HomeCommunity'
import CommunityEvents from "./CommunityEvents";

const CommunityData = () => {
{/*  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const handleCommunitySelect = (communityId) => {
    // Check if communityId is a valid value before finding the community
    if (communityId) {
      const community = COMMUNITY_DATA.find((c) => c.id === communityId);
      setSelectedCommunity(community);
    }
  }; */}

  return (
    <div>
      {/* Banner Container */}
      <BannerContainer />
      {/* Rest of the content of the Community component */}
    <HomeCommunity/>
    <CommunityEvents/>
    
      {/* Testimonials Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <Testimonials testimonialsData={TESTIMONIALS} />
      </div>
      
    </div>
  );
};

export default CommunityData;
