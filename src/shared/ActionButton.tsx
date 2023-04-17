import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
import { setSelectPage } from "../features/context/contextSlice";
import { useAppDispatch } from "../store";

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => dispatch(setSelectPage(SelectedPage.ContactUs))}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
