import { Button } from "@/common/button";
import "./index.scss";
import React, { Fragment } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { classNames } from "@/utils";
import { MenuList } from "@/customs";
import { TfiClose } from "react-icons/tfi";

export const Header: React.FunctionComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const [currency, setCurrency] = React.useState("United States USD $");
  const [language, setLanguage] = React.useState("English");
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const [isOpenLanguageMenu, setIsOpenLanguageMenu] = React.useState(false);
  return (
    <Fragment>
      <div className="w-full h-[50px] px-auto bg-primary-color z-10">
        <div className="w-full h-full py-[10px] px-8 flex items-center justify-between">
          <div className="hidden lg:flex justify-start items-center w-1/4 h-full">
            <FaTwitter className="p-1 size-7 text-[#fff] cursor-pointer" />
            <FaFacebookSquare className="p-1 ml-1 size-7 text-[#fff] cursor-pointer" />
            <FaInstagram className="p-1 ml-1 size-7 text-[#fff] cursor-pointer" />
            <FaTiktok className="p-1 ml-1 size-7 text-[#fff] cursor-pointer" />
          </div>
          <div className="flex items-center justify-center h-full flex-1 gap-6">
            <div className="text-base leading-7 text-[#fff] font-semibold">Welcome to our store</div>
            <Button
              className="lg:h-[28px] h-[30px] lg:w-auto w-[30px] lg:px-[10px] px-[5px] py-[2px] rounded-xl bg-transparent flex items-center justify-center gap-1 text-[#fff] hover:border-black hover:bg-black hover:text-white"
              variant="outline"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <span className="text-[12px] hidden lg:block">More</span>
              <IoIosArrowDown
                className={classNames("tc-header-button-arrow-icon text-base inline-block", {
                  "tc-header-button-arrow-icon-open": isDrawerOpen,
                })}
              />
            </Button>
          </div>
          <div className="hidden lg:flex gap-6 justify-end items-center w-1/4 h-full">
            <MenuList
              isOpen={isOpenMenu}
              dropdownValue={currency}
              buttonLabel={currency}
              buttonClassName="text-[#fff] gap-1 h-[32px] text-[13.33px] px-[6px] py-[1px] hover:text-[#fff] hover:bg-transparent"
              variant="ghost"
              onChangeOpen={(value) => setIsOpenMenu(value)}
              dropdownIcon={
                <IoIosArrowDown
                  className={classNames("tc-header-button-arrow-icon text-base font-thin inline-block", {
                    "tc-header-button-arrow-icon-open": isOpenMenu,
                  })}
                />
              }
              dropdownClassName="p-0 mt-2 w-56 mr-14"
              options={[
                { label: "United States USD $", value: "United States USD $" },
                { label: "United Kingdom GBP £", value: "United Kingdom GBP £" },
                { label: "Canada CAD $", value: "Canada CAD $" },
                { label: "Australia AUD $", value: "Australia AUD $" },
              ]}
              onChangeValue={(value) => setCurrency(value)}
            />
            <MenuList
              isOpen={isOpenLanguageMenu}
              dropdownValue={language}
              buttonLabel={language}
              buttonClassName="text-[#fff] gap-1 h-[32px] text-[13.33px] px-[6px] py-[1px] hover:text-[#fff] hover:bg-transparent"
              variant="ghost"
              onChangeOpen={(value) => setIsOpenLanguageMenu(value)}
              dropdownIcon={
                <IoIosArrowDown
                  className={classNames("tc-header-button-arrow-icon text-base font-thin inline-block", {
                    "tc-header-button-arrow-icon-open": isOpenLanguageMenu,
                  })}
                />
              }
              dropdownClassName="p-0 mt-2 w-40 mr-8"
              options={[
                { label: "English", value: "English" },
                { label: "Việt Nam", value: "Việt Nam" },
              ]}
              onChangeValue={(value) => setLanguage(value)}
            />
          </div>
        </div>
      </div>
      <div className={classNames("tc-header-drawer", { "tc-header-drawer-open": isDrawerOpen })}>
        <div className="relative w-full h-full py-[70px] px-[30px]">
          <div className="absolute w-full right-0 top-0">
            <div className="flex items-center justify-end min-h-[70px] px-[30px]">
              <Button
                className="hover:bg-transparent"
                variant="ghost"
                size="icon"
                onClick={() => setIsDrawerOpen(false)}
              >
                <TfiClose className="text-[#fff] text-[20px]" />
              </Button>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-full mx-auto flex justify-center items-center flex-col gap-[20px]">
              <div className="text-[16.66px] text-[#ffffffbf] leading-7">LIMITED OFFER</div>
              <div className="text-[40px] text-[#fff] font-semibold">UP TO 50% OFF</div>
              <div className="block max-w-[820px]">
                <p className="text-[#ffffffbf] text-center leading-[30px] text-[16.66px]">Pair text with an image to focus on your chosen product, collection, or blog post. Include information about availability, style, or even a review.</p>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="h-[52px] rounded-[10px] py-[10px] px-[35px] text-[17px] uppercase bg-[#fff] font-normal"
                  onClick={() => {
                    // Add your logic to handle the button click
                  }}
                >
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
