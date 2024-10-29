import Analysis from "./Components/Analysis";
import Banner from "./Components/Banner";
import Blogs from "./Components/Blogs";
import Courses from "./Components/Courses";
import Products from "./Components/Products";
import Progress from "./Components/Progress";
import Question from "./Components/Question";
import Reviews from "./Components/Reviews";
import Success from "./Components/Success";
import WhyUs from "./Components/WhyUs";


export default function Home() {
  return (
    <>
    <Banner/>
    <Courses/>
    <Analysis/>
    <Products/>
    <Success/>
    <WhyUs/>
    <Progress/>
    <Reviews/>
    <Blogs/>
    <Question/>
    </>
  );
}
