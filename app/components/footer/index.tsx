import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Col, Input, Row } from "antd";

const Footer = () => {
  return (
    <div className="bg-[#2D322B] text-white py-20">
      <div className="container mx-auto  px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-2xl text-white font-medium">Contact With US</p>
          <h2 className="text-4xl text-white font-bold my-5">
            Feel free to ask
            <br />
            Something we are here
          </h2>
          <p className="text-white/60">
            We have a passion to deliver furniture for all. Bringing you quality
            furniture at the best value, so you’ll always be able to find
            something you adore at the right price.
          </p>
        </div>
        <div>
          <Row className="">
            <Col span={12}>
              <Input
                placeholder="Your name"
                className="bg-[#494F46] h-10 rounded-md hover:text-[#242424] text-white border-none hover:ring-2 hover:ring-green-500"
              />
            </Col>
            <Col span={12} className="pl-3">
              <Input
                placeholder="Email Address"
                className="bg-[#494F46] h-10 rounded-md hover:text-[#242424] text-white border-none hover:ring-2 hover:ring-green-500"
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-10">
        <div className="container px-10 mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="space-x-5 text-gray-400">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Furniture
            </a>
            <a href="#" className="hover:text-white">
              Accessories
            </a>
            <a href="#" className="hover:text-white">
              About Us
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="space-x-4 mt-5 md:mt-0">
            <InstagramOutlined className="text-2xl hover:text-white cursor-pointer" />
            <FacebookOutlined className="text-2xl hover:text-white cursor-pointer" />
            <LinkedinOutlined className="text-2xl hover:text-white cursor-pointer" />
            <TwitterOutlined className="text-2xl hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
