import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import TeacherList from "../../components/TeacherList/TeacherList";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <h3>Dashboard</h3>
      <FeaturedInfo />
      {/*<TeacherList /> */}
    </div>
  );
}
