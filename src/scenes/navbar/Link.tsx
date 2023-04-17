import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { setSelectPage } from "@/features/context/contextSlice";
type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  const dispatch = useAppDispatch();
  const selectedPage = useSelector(
    (state: RootState) => state.context.selectedPage
  );
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => dispatch(setSelectPage(lowerCasePage))}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
