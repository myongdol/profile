export const CHANGE_THEME = "CHANGE_THEME";

export const changeThemeMode = (theme) => {
    return{
        type: CHANGE_THEME,
        theme,
    }
}