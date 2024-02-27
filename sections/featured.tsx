import FeaturedCard from "@/components/cards/featured/featured-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";
import Heading from "@/components/heading/heading";

import { featuredData } from "@/data";

const MainFeatured = featuredData[0];

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/*Heading*/}
      <Heading number="01" title_1="Featured" title_2="Work" />
      {/*Main Featured Card*/}
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
      />
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
    </div>
  );
}
