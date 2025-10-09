import Swiper from "swiper";
import Pagination from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
    modules: [Pagination],
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    }
});