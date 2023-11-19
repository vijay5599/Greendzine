import React, { useEffect, useState } from "react";
import contact from "../assets/Group 46@2x.png";
import MOPTr0 from "../assets/moptro logo@2x.png";
import HomeOutlinedIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
// import { HorizontalBarChart } from "../assets/HorizontalLineChart";

const SearchPerson = () => {
  const navigate = useNavigate();
  const initialData = [
    {
      id: 1,
      name: "John",
      dob: "16-11-200",
      role: "Software Developer",
    },
    {
      id: 2,
      name: "Jane",
      dob: "17-11-200",
      role: "Data Scientist",
    },
    {
      id: 3,
      name: "Alice",
      dob: "18-11-200",
      role: "UX Designer",
    },
    {
      id: 4,
      name: "dob",
      dob: "19-11-200",
      role: "Product Manager",
    },
    {
      id: 5,
      name: "Charlie",
      dob: "20-11-200",
      role: "Frontend Developer",
    },
    {
      id: 6,
      name: "David",
      dob: "21-11-200",
      role: "Backend Developer",
    },
    {
      id: 7,
      name: "Eva",
      dob: "22-11-200",
      role: "QA Engineer",
    },
    {
      id: 8,
      name: "Frank",
      dob: "23-11-200",
      role: "DevOps Engineer",
    },
    {
      id: 9,
      name: "Grace",
      dob: "24-11-200",
      role: "UI Designer",
    },
    {
      id: 10,
      name: "Harry",
      dob: "25-11-200",
      role: "System Administrator",
    },
  ];
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);
  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    if (searchTermLowerCase === "") {
      setFilteredData(initialData);
    } else {
      const filtered = initialData.filter((item) =>
        item.name.toLowerCase().includes(searchTermLowerCase)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="mt-5">
      <div>
        <p className="absolute left-52 mt-3 p-2 bg-[#182323] rounded-full px-4 text-green-600">
          4
        </p>
        <img
          src={contact}
          alt="logo"
          className="absolute top-0 right-0 w-20 h-20"
        />
      </div>

      <div className="flex flex-col m-0 mx-auto mt-28 text-center p-8 items-center min-h-screen">
        <img src={MOPTr0} alt="MOPTr0" className="h-24 w-24" />
        <div className="mt-6">
          <div className="w-[320px] p-4 rounded-full flex bg-[#182323] outline-none text-gray-400 font-semibold ml-2">
            <input
              className="w-[320px] rounded-full bg-[#182323] outline-none text-gray-400 font-semibold text-lg px-2"
              placeholder="Search with name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon
              style={{ width: "35px", height: "35px" }}
              className="text-gray-400 ml-2 rounded-full"
              onClick={handleSearch}
            />
          </div>

          <div className="max-h-[480px] overflow-y-auto mt-5">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="relative rounded-3xl w-[320px] bg-slate-900 px-6 m-2 overflow-scroll"
              >
                <div className="flex flex-col font-semibold gap-4 text-left justify-between w-[260px] my-9">
                  <p className="text-sm">EMP ID : {item.id}</p>
                  <p className="text-sm">Name : {item.name}</p>
                  <p className="text-sm">
                    DOB : <span className="text-orange-500">{item.dob}</span>
                  </p>
                  <p className="text-sm">
                    Role : <span className="text-green-600">{item.role}</span>
                  </p>
                </div>
                <div className="absolute top-2 right-2 p-1 px-3 bg-gray-800 text-white border-[1px] border-black rounded-full">
                  {item.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between px-14 py-4 bg-[#0f2323] rounded-3xl">
        <HomeOutlinedIcon
          onClick={() => navigate("/dashboard")}
          style={{ color: "green", fontSize: "45px" }}
        />
        <PersonIcon
          style={{
            color: "green",
            fontSize: "45px",
            width: location.pathname === "/user" ? "70px" : "45px",
            backgroundColor: location.pathname === "/user" ? "#8CC084" : "",
          }}
        />
      </div>
    </div>
  );
};

export default SearchPerson;
