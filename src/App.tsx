import React, { useEffect } from "react";
import { RootState, useAppDispatch } from "./store";
import { setSelectPage, setIsTopOfPage } from "./features/context/contextSlice";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        dispatch(setIsTopOfPage(true));
        dispatch(setSelectPage(SelectedPage.Home));
      }
      if (window.scrollY !== 0) dispatch(setIsTopOfPage(false));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar />
    </div>
  );
}

export default App;
