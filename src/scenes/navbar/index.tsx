import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./Link";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import classNames from "classnames";

import {
  setSelectPage,
  setIsTopOfPage,
} from "../../features/context/contextSlice";
import ActionButton from "../../shared/ActionButton";
import useMediaQuery from "../../hooks/UseMediaQuery";
import { SelectedPage } from "../../shared/types";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { flexBetween, selectedPage, isTopOfPage } = useSelector(
    (state: RootState) => state.context
  );
  const navbarBackground = classNames({
    "bg-transparent": isTopOfPage,
    "bg-primary-100": !isTopOfPage,
    "drop-shadow": isTopOfPage,
    "shadow-sm": !isTopOfPage,
    "transition-colors": true, // Add transition effect to color properties
    "duration-500": true, // Set transition duration
    "ease-in-out": true, // Set transition easing
  });

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page="Home" />
                  <Link page="Benefits" />
                  <Link page="Our Classes" />
                  <Link page="Contact Us" />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link page="Home" />
            <Link page="Benefits" />
            <Link page="Our Classes" />
            <Link page="Contact Us" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
