import React from "react";
import contact from "../assets/Group 46@2x.png";
import MOPTr0 from "../assets/moptro logo@2x.png";
import HomeOutlinedIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
// import { HorizontalBarChart } from "../assets/HorizontalLineChart";

const ProductivityDashboard = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: "Productivity on Monday",
      Perc: "4%",
    },
    {
      title: "Productivity on Tuesday",
      Perc: "10%",
    },
    {
      title: "Productivity on Wednesday",
      Perc: "92%",
    },
    {
      title: "Productivity on Thursday",
      Perc: "69%",
    },
    {
      title: "Productivity on Friday",
      Perc: "2%",
    },
    {
      title: "Productivity on Saturday",
      Perc: "50%",
    },
  ];

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
        <div className="w-[320px] mt-10 rounded-3xl bg-[#131c19] outline-none text-gray-400 font-semibold">
          <h1 className="w-[320px] p-4 rounded-full bg-[#182323] outline-none text-gray-400 font-semibold">
            Employee Productivity Dashboard
          </h1>

          <div className="ml-4 mt-6 h-[450px]">
            {data.map((item, index) => (
              <div key={index}>
                <span className="flex justify-between w-[260px] my-5">
                  <p className="text-sm text-left">{item.title}</p>
                  <p className="text-sm text-[#076515]">{item.Perc}</p>
                </span>
                <div
                  style={{ width: `${item.Perc}` }}
                  className={`bg-[#076515] h-2 border-[#36A546] border-[1px] rounded-3xl`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between px-20 py-4 bg-[#0f2323] rounded-3xl">
        <HomeOutlinedIcon style={{ color: "green", fontSize: "45px" }} />
        <PersonIcon
          onClick={() => navigate("/user")}
          style={{ color: "green", fontSize: "45px" }}
        />
      </div>
    </div>
  );
};

export default ProductivityDashboard;
