
import CallToAction from "@/Components/CallToAction";
import FAQSection from "@/Components/FAQSection";
import FeaturedInstructors from "@/Components/FeaturedInstructors";
import HeroBanner from "@/Components/HeroBanner"
import LatestBlog from "@/Components/LatestBlog";
import LearningRoadmap from "@/Components/LearningRoadmap";
import LearningStatistics from "@/Components/LearningStatistics";
import Newsletter from "@/Components/Newsletter";
import PopularCategories from '@/Components/PopularCategories';
import PopularCourses from "@/Components/PopularCourses";
import StudentSuccessStories from "@/Components/StudentSuccessStories";
import WhyChooseUs from "@/Components/WhyChooseUs";

const page = () => {
  return (
    <div>
      <HeroBanner/>
      <PopularCategories/>
      <PopularCourses/>
      <WhyChooseUs/>
      <LearningStatistics/>
      <FeaturedInstructors/>
      <LearningRoadmap/>
      <StudentSuccessStories/>
      <LatestBlog/>
      <FAQSection/>
      <Newsletter/>
      <CallToAction/>
    </div>
  );
};

export default page;