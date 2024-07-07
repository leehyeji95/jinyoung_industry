import {useCallback, useRef} from "react";
// @mui material components

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image
import f2_1 from "assets/images/facility2-1.png";
import f2_2 from "assets/images/facility2-2.png";
import f2_3 from "assets/images/facility2-3.png";
import f2_4 from "assets/images/facility2-4.png";
import f2_5 from "assets/images/facility2-5.png";
import f2_6 from "assets/images/facility2-6.png";


function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    }
    const slickRef = useRef(null);

    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);

    return (
        <MKBox >
            <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
                설비 보유 현황
            </MKTypography>
            <Slider {...settings} ref={slickRef}>
                {/*<MKBox component="img" src={f1_1} pl={3}/>*/}
                {/*<MKBox component="img" src={f1_2} pl={3}/>*/}
                {/*<MKBox component="img" src={f1_3} pl={3}/>*/}
                {/*<MKBox component="img" src={f1_4} pl={3}/>*/}
                {/*<MKBox component="img" src={f1_5} pl={3}/>*/}
                <MKBox component="img" src={f2_1} pl={3}/>
                <MKBox component="img" src={f2_2} pl={3}/>
                <MKBox component="img" src={f2_3} pl={3}/>
                <MKBox component="img" src={f2_4} pl={3}/>
                <MKBox component="img" src={f2_5} pl={3}/>
                <MKBox component="img" src={f2_6} pl={3}/>
            </Slider>
        </MKBox>
    );
}

export default ImageSlider;