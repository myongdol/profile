import { useSelector, useDispatch } from "react-redux";
import {changeThemeMode} from "../redux/actions/themeAction"


export function useTheme() {
    const theme = useSelector((state) => state); 
    const dispatch = useDispatch();


    const setTheme = (theme) => {
        dispatch(changeThemeMode(theme));

    };

    return [theme, setTheme];
};