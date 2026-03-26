(() => {
    const cssStyles = {
        // Background colors
        "chai-bg-pink": { backgroundColor: "pink" },
        "chai-bg-blue": { backgroundColor: "blue" },
        "chai-bg-red": { backgroundColor: "red" },
        "chai-bg-orange": { backgroundColor: "orange" },
        "chai-bg-yellow": { backgroundColor: "yellow" },
        "chai-bg-black": { backgroundColor: "black" },

        // Text colors
        "chai-pink": { color: "pink" },
        "chai-white": { color: "white" },
        "chai-blue": { color: "blue" },
        "chai-red": { color: "red" },
        "chai-orange": { color: "orange" },
        "chai-yellow": { color: "yellow" },
        "chai-black": { color: "black" },

        // Text alignment
        "chai-text-center": { textAlign: "center" },
        "chai-text-left": { textAlign: "left" },
        "chai-text-right": { textAlign: "right" },
        "chai-text-justify": { textAlign: "justify" },

        // Font sizes
        "chai-text-sm": { fontSize: "14px" },
        "chai-text-lg": { fontSize: "18px" },
        "chai-text-xl": { fontSize: "20px" },
        "chai-text-2xl": { fontSize: "24px" },
        "chai-text-3xl": { fontSize: "30px" },

        // Padding
        "chai-p-1": { padding: "1px" },
        "chai-p-2": { padding: "2px" },
        "chai-p-3": { padding: "3px" },
        "chai-p-4": { padding: "4px" },
        "chai-p-5": { padding: "5px" },
    };


    const selectAll = document.querySelectorAll("*");

    const selectedElements = Array.from(selectAll).filter(ele => ele.className.includes("chai"));

    function applyStyling(ele) {

        const classArr = [...ele.classList];

        classArr.forEach((classs) => {
            if (classs.startsWith("chai") && cssStyles[classs]) {
                Object.assign(ele.style, cssStyles[classs]);
                ele.classList.remove(classs);
            }
        })
    }


    window.addEventListener("DOMContentLoaded", () => {

        selectedElements.forEach(ele => applyStyling(ele));
    })
})();