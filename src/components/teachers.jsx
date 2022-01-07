import { useState, useEffect } from "react";
import axios from "axios";
import "./teachers.css";
import Loader from "./loader";

const Teachers = () => {
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTeachers = async () => {
    const url = "https://randomuser.me/api/?results=240";
    await axios
      .get(url)
      .then((response) => {
        setTeachers(response.data.results);
        setLoading((loading) => (loading = false));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <div className="header-bar">
        Teachers
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      <div className="teachers">
        {teachers
          // eslint-disable-next-line array-callback-return
          .filter((teacher) => {
            if (searchTerm.trim() === "") {
              return teacher;
            } else if (
              teacher.name.first
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              teacher.name.last.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return teacher;
            }
          })
          .map((teacher, index) => (
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
