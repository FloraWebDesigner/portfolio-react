export default function themeReducer(state,action) {
    switch (action.type) {
        case "switch_yellow":
            return {theme: "yellow"};
        case "switch_blue":
            return {theme: "blue"};
        case "switch_red":
            return {theme: "red"};
        case "switch_dark":
            return {theme: "dark"};
        default:
            return state;
    }
}