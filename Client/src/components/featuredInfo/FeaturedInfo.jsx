import "./FeaturedInfo.css";
import { Info } from "@material-ui/icons";
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">
          Öğrenci Sayısı <Info />
        </span>
        <div className="featuredStudentContainer">
          <span className="featuredStudent">100</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">
          Öğretmen Sayısı <Info />
        </span>
        <div className="featuredTeacherContainer">
          <span className="featuredTeacher">32</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">
          Veli Sayısı <Info />
        </span>
        <div className="featuredParentContainer">
          <span className="featuredParent">200</span>
        </div>
      </div>
    </div>
  );
}
