import { useState, useEffect } from "react";
import axios from "axios";
import "./teachers.css";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    const url = "https://randomuser.me/api/?results=240";
    await axios
      .get(url)
      .then((response) => {
        setTeachers(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div>
      <div className="header-bar">Teachers</div>
      <div className="teachers">
        {teachers.map((teacher, index) => (
          <div className="teacher" key={index}>
            <img src={teacher.picture.large} alt="teacher" />
            <div>
              <div className="text name">{`${teacher.name.title}. ${teacher.name.first} ${teacher.name.last} `}</div>
              <div className="text email">{`${teacher.email}`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
