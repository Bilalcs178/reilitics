import React, { useState, useEffect } from "react";
import Link from "next/link"
import Sidebar from "../../Component/SideNavbar";
import MaterialDesignSwitchh from "../../Component/Togle1";
import Membership from "../../Component/Data/MembershipData";
import Dashnav from "../../Component/Dashnav";
import withAuth from "../../Component/Auth";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";


const Dashboard = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div className="d-inline-flex w-100">
        <Sidebar />
        <div style={{ width: "inherit" }}>
          <Dashnav />
          <div className='container ms-3 mt-3'>
            <p className="fs-40 Gothic_3D">Hi Tabish</p>
            <p className="fs-16">Welcome back to your dashboard</p>
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="bg-dash p-5">
                  <p className="fs-30 Gothic_3D">Overview</p>
                  <p className="fs-16 greyBlack">Let's start by finding you a city of intrest</p>
                  <div className="row">
                    <Link href={"./RentalGrowth"}>
                      <div className="col-sm-12 col-md-6 bg-white text-center p-5 Hover pointer-cursor">
                        <img src={'/development1.svg'} />
                        <p className="my-5 fs-18 Bold greyBlack">Market Aprecation</p>
                      </div>
                    </Link>
                    <Link href={"./Appreciation"}>
                      <div className="col-sm-12 col-md-6 bg-white text-center p-5 Hover pointer-cursor">
                        <img src={'/chart1.svg'} />
                        <p className="my-5 fs-18 Bold greyBlack">Rental Growth</p>
                      </div>
                    </Link>
                  </div>
                </div>
                {Membership.map(mem => {
                  return (
                    <>
                      <div className="bg-dash mt-3 p-5">
                        <p className="fs-30 Gothic_3D mb-2">MEMBERSHIP Details</p>
                        <div className="bg-white p-5">
                          <p className="fs-16 greyBlack">Membership Package</p>
                          <div className="d-flex mt-3">
                            <p className=" fs-20 Bold greyBlack">Paid</p>
                            <p className="ms-auto fs-22 Bold greyBlack">{mem.price}</p>
                          </div>
                          <div className="d-flex mt-1">
                            <p className="my-auto fs-16 greyBlack">Status</p>
                            <button className="btn ms-auto light-BlueBtn px-5 fs-14">{mem.status ? "active" : "not-active"}</button>
                          </div>
                          <div className="d-flex mt-2">
                            <p className="my-auto fs-16 greyBlack">Membership Renewdate</p>
                            <p className="ms-auto my-auto fs-16 greyBlack">{mem.date}</p>
                          </div>
                          <div className="d-flex  mt-2">
                            <div className="row">
                              <div className="col-xl-4 d-flex">
                                <p className="my-auto fs-14 text-nowrap greyBlack">Auto renew</p>
                                <div className="mt-2 ms-3">
                                  <MaterialDesignSwitchh className='mt-3' /></div>
                              </div>
                              <div className="col-xl-4 ms-auto d-flex">
                                <button className=" btn mx-2 opac px-4 btnYelow">Deactivate</button>
                                <button className=" btn mx-2 opac px-4 btnYelow">Downground</button>
                                <button className=" btn mx-2 opac px-4 btnYelow">Renew</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className="col-lg-4">
                <div className="bg-dash p-3">
                  <p className="fs-30 Gothic_3D mb-0">Detail</p>
                  <p className="fs-16 greyBlack">Let's go to the city statistics</p>
                  <div className="bg-white text-center px-3 mx-auto p-3">
                    <p className="fs-18 greyBlack" style={{ fontWeight: "medium" }}>By city detail Statistics</p>
                    <input type="text" value={state} name="state"
                      placeholder="select state"
                      onChange={(e) => setState(e.target.value)}
                      className="form-control dash-form  mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div className="d-flex mt-3 button-inline">
                      <input type="text" value={city} name="city"
                        placeholder="select city"
                        onChange={(e) => setCity(e.target.value)}
                        className="form-control dash-form w-50  " id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <button className="btn ms-auto fs-15 bluebtn btn-w brdr">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Dashboard);
