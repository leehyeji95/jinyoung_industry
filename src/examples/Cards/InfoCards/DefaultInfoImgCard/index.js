/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import coinbase from "../../../../assets/images/logos/gray-logos/logo-coinbase.svg";
import MKButton from "../../../../components/MKButton";
import MuiLink from "@mui/material/Link";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";

function DefaultInfoCard({ color, certification, title, name, date, cert, valid, direction, small }) {
  return (
      <Card>
          <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
              <MKBox
                  component="img"
                  src={certification}
                  alt={title}
                  borderRadius="lg"
                  width="80%"
                  position="relative"
                  zIndex={1}
              />
              <MKBox
                  borderRadius="lg"
                  shadow="md"
                  width="80%"
                  height="80%"
                  position="center"
                  left={0}
                  top={0}
                  sx={{
                      backgroundImage: `url(${certification})`,
                      transform: "scale(0.94)",
                      filter: "blur(12px)",
                      backgroundSize: "cover",
                  }}
              />
          </MKBox>
          <MKBox p={3} mt={-1} textAlign="center">
              <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
                  {title}
              </MKTypography>
              <MKBox mt={1} mb={3} textAlign="left">
                  <MKTypography variant="body2" component="p" color="text">
                      인증획득일 : {date} <br/>
                      인증 기관 : {cert} <br/>
                      인증유효일 : {valid}
                  </MKTypography>
              </MKBox>
          </MKBox>
      </Card>
    // <MKBox lineHeight={1} p={direction === "center" ? 2 : 0} textAlign={direction}>
    //     <MKBox component="img" src={certification} alt="certification" width="90%" opacity={0.7} mb={3}/>
    //   <MKTypography
    //     display="block"
    //     variant="5"
    //     fontWeight="bold"
    //     mb={1.5}
    //   >
    //     {title}
    //   </MKTypography>
    //   <MKTypography
    //     display="block"
    //     variant={small ? "button" : "body2"}
    //     color="text"
    //     pr={direction === "left" ? 6 : 0}
    //     pl={direction === "right" ? 6 : 0}
    //     mb={3}
    //   >
    //       인증획득일 : {date} <br/>
    //       인증 기관 : {cert} <br/>
    //       인증유효일 : {valid}
    //   </MKTypography>
    // </MKBox>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  direction: "left",
  small: false,
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
};

export default DefaultInfoCard;
