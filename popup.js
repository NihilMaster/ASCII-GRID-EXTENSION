const mapping = {
    horizontal: "─",
    total: "█",
    vertical: "│",
    up_left: "┌",
    up_center: "┬",
    up_right: "┐",
    center_left: "├",
    center: "┼",
    center_right: "┤",
    down_left: "└",
    down_center: "┴",
    down_right: "┘"
};

Object.keys(mapping).forEach(id => {
    document.getElementById(id).addEventListener("click", () => {
        navigator.clipboard.writeText(mapping[id]);
    });
});