import Header from "./components/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeMode } from "./redux/actions/themeAction";
import ThemeButton from "./components/ThemeButton";



export default function App() {
  const state = useSelector((state) => state);
  const [theme, setTheme] = useState(state)

  const dispatch = useDispatch();
  
  const handleChangeMode = () => {
    dispatch(changeThemeMode(!theme));
    setTheme(!theme);
  };


  return (
    <>
      <Header />
      <ThemeButton handleChangeMode={handleChangeMode} />
    </>
    )
}

