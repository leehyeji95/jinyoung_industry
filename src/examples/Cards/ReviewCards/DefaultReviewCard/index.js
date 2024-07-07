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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: gray;
  cursor: pointer;
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: underline;
  }
`;

function DefaultReviewCard({ color, image, name, date, file, filename }) {

  return (
    <MKBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={color === "transparent" ? "none" : "md"}
      p={3}
    >
      {image && (
        <MKAvatar
          src={image}
          alt={name}
          variant="rounded"
          size="lg"
          shadow="md"
          sx={{ mt: -5, mb: 1 }}
        />
      )}
      <MKBox lineHeight={1}>
        <MKTypography
          display="block"
          variant={image ? "button" : "h6"}
          fontWeight="bold"
          // color={color === "transparent" || color === "light" ? "dark" : "white"}
          color={"dark"}
          mb={0.5}
        >
          {name}
        </MKTypography>
        <MKTypography
          variant={image ? "caption" : "button"}
          fontWeight="regular"
          lineHeight={1}
          // color={color === "transparent" || color === "light" ? "text" : "white"}
          color={"dark"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Icon>schedule</Icon>&nbsp;
          {date}
        </MKTypography>
      </MKBox>
      <MKTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        <br/>
        {/*&quot;&quot;*/}
      </MKTypography>
      <MKTypography
        variant="h4"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,

          "& .material-icons-round": {
            ml: -0.375,
          },

          "a.link:hover, .link:hover, a.link:focus, .link:focus": {
            textDecoration: "underline",
          },
        }}
      >
        {/*<StyledLink to={file && file} target="_blank">*/}
        {/*  {filename}*/}
        {/*</StyledLink>*/}
        <a href={file && file} target="_blank" style={{color: "gray", textDecoration: "underline !important"}}>{filename}</a>

      </MKTypography>
    </MKBox>
  );
}

// Setting default values for the props of DefaultReviewCard
DefaultReviewCard.defaultProps = {
  // color: "transparent",
  color: "white",
  image: "",
};

// Typechecking props for the DefaultReviewCard
DefaultReviewCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
};

export default DefaultReviewCard;
