import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import TeacherList from "../../components/TeacherList/TeacherList";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <TeacherList />
    </div>
  );
}
