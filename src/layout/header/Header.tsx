
import "./index.scss";
import React, { Fragment } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { classNames } from "@/utils";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { MenuList } from "@/components";
import { Button } from "@mui/base";

export interface IHeaderNavigationProps {
    title: string;
    path?: string;
    isHaveChild?: boolean;
    children?: JSX.Element
}

export const Header: React.FunctionComponent = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
    const [currency, setCurrency] = React.useState("United States USD $");
    const [language, setLanguage] = React.useState("English");
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const [isOpenLanguageMenu, setIsOpenLanguageMenu] = React.useState(false);
    const navigate = useNavigate()

    const HeaderMenuList: IHeaderNavigationProps[] = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Categories",
            isHaveChild: true,
            children: (
                <div className="tc-header-section-main__expand-container">
                    sdfdsfds
                </div>
            )
        },
        {
            title: "Products",
            path: "/products",
        },
        {
            title: "Pages",
            isHaveChild: true,
            children: (
                <Fragment></Fragment>
            )
        }
    ]
    return (
        <Fragment>
            <div className="tc-header-section__top bg-primary-color">
                <div className="tc-header-top__row">
                    <div className="tc-header-top-row__social-part">
                        <FaTwitter className="tc-header-top-row__social-icon" />
                        <FaFacebookSquare className="tc-header-top-row__social-icon" />
                        <FaInstagram className="tc-header-top-row__social-icon" />
                        <FaTiktok className="tc-header-top-row__social-icon" />
                    </div>
                    <div className="tc-header-top-row__center-part">
                        <div className="tc-header-top-row__center-part-label">Welcome to our store</div>
                        <Button
                            className="tc-header-top-row__center-part-button"
                            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                        >
                            <span className="tc-header-top-row__center-part-button-title">More</span>
                            <IoIosArrowDown
                                className={classNames("tc-header-button-arrow-icon", {
                                    "tc-header-button-arrow-icon-open": isDrawerOpen,
                                })}
                            />
                        </Button>
                    </div>
                    <div className="tc-header-top-row__end-part">
                        <MenuList
                            isOpen={isOpenMenu}
                            dropdownValue={currency}
                            buttonLabel={currency}
                            buttonClassName="tc-header-top-row__end-part-button"
                            onChangeOpen={(value) => setIsOpenMenu(value)}
                            dropdownIcon={
                                <IoIosArrowDown
                                    className={classNames("tc-header-button-arrow-icon", {
                                        "tc-header-button-arrow-icon-open": isOpenMenu,
                                    })}
                                />
                            }
                            dropdownClassName="tc-header-top-row__end-part-dropdown"
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
                            buttonClassName="tc-header-top-row__end-part-button"
                            onChangeOpen={(value) => setIsOpenLanguageMenu(value)}
                            dropdownIcon={
                                <IoIosArrowDown
                                    className={classNames("tc-header-button-arrow-icon", {
                                        "tc-header-button-arrow-icon-open": isOpenLanguageMenu,
                                    })}
                                />
                            }
                            dropdownClassName="tc-header-top-row__end-part-dropdown"
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
                <div className="tc-header-drawer-container">
                    <div className="tc-header-drawer-container__top">
                        <div className="tc-header-drawer-container__top-row">
                            <Button className="tc-header-drawer-container__top-row-close-button" onClick={() => setIsDrawerOpen(false)}>
                                <TfiClose className="tc-header-drawer-container__top-row-close-icon" />
                            </Button>
                        </div>
                    </div>
                    <div className="tc-header-drawer-container__main">
                        <div className="tc-header-drawer-container__main-row">
                            <div className="tc-header-drawer-container__main-row-title">LIMITED OFFER</div>
                            <div className="tc-header-drawer-container__main-row-subtitle">UP TO 50% OFF</div>
                            <div className="tc-header-drawer-container__main-row-description">
                                <p className="tc-header-drawer-container__main-row-description-text">
                                    Pair text with an image to focus on your chosen product, collection, or blog post. Include information about
                                    availability, style, or even a review.
                                </p>
                            </div>
                            <div>
                                <Button
                                    className="tc-header-drawer-container__main-row-button"
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
            <div className="tc-header-section__main">
                <div className="tc-header-section-main__container">
                    <div className="tc-header-section-main__row">
                        <div className="tc-header-section-main__logo">
                            <img
                                src="/assets/tech_com_logo.png"
                                className="tc-header-section-main__logo-img"
                                alt="tech_com"
                                onClick={() => navigate("/")}
                            />
                        </div>
                        <nav className="tc-header-section-main__navigate">
                            <ul className="tc-header-section-main__navigate-list">
                                {HeaderMenuList.map((item, id) => (
                                    <li className="tc-header-section-main__navigate-item" key={id}>
                                        {item.isHaveChild
                                            ? <Fragment>
                                                <div className="tc-header-section-main__navigate-item-dropdown">
                                                    <span className="tc-header-navigate-button">{item.title}</span>
                                                    <IoIosArrowDown className={classNames("tc-header-button-arrow-icon")}
                                                    />
                                                </div>
                                                {item.children}
                                            </Fragment>
                                            : <Link className="tc-header-section-main__navigate-item-link" to={item.path!}>{item.title}</Link>
                                        }
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="tc-header-section-main__user-action">
                            <Button
                                className="tc-header-section-main__user-action-button"
                            >
                                <IoSearchOutline style={{ fontSize: "24px" }} />
                            </Button>
                            <Button
                                className="tc-header-section-main__user-action-button"
                            >
                                <IoPersonOutline style={{ fontSize: "24px" }} />
                            </Button>
                            <Button
                                className="tc-header-section-main__user-action-button"
                            >
                                <IoHeartOutline style={{ fontSize: "24px" }} />
                            </Button>
                            <Button
                                className="tc-header-section-main__user-action-button"
                            >
                                <IoCartOutline style={{ fontSize: "24px" }} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
