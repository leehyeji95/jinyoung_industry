/**
 =========================================================
 * Material Kit 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// react-router components
import * as React from "react";
import {Link} from "react-router-dom";

import {useState} from "react";
// prop-types is a library for typechecking of props

import PropTypes from "prop-types";
// @mui material components

import Card from "@mui/material/Card";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {animated, useSpring} from "@react-spring/web";

import product1_1 from "assets/images/product1-1.png";
import product2_1 from "assets/images/product2-1.png";
import MKTypography from "../../../../components/MKTypography";

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: open ? 1 : 0},
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, {onClick})}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function TransparentModalCard({image, title, type}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const imageTemplate = (
        <MKBox position="relative" borderRadius="lg">
            <MKBox
                component="img"
                src={image}
                borderRadius="lg"
                shadow="md"
                width="80%"
                position="relative"
                zIndex={1}
            />
            <MKBox
                borderRadius="lg"
                shadow="md"
                width="80%"
                height="80%"
                position="absolute"
                left={0}
                top={0}
                sx={{
                    backgroundImage: `url(${image})`,
                    transform: "scale(0.94)",
                    filter: "blur(12px)",
                    backgroundSize: "cover",
                }}
            />
        </MKBox>
    );

    return (
        <Card
            sx={{
                background: "transparent",
                boxShadow: "none",
                overflow: "visible",
            }}
        >
            <Link pt={2} pb={3} onClick={handleOpen}>
                {imageTemplate}
            </Link>
            <MKBox pt={2} pb={3}>
                <MKTypography variant="h5" gutterBottom>
                    {title}
                </MKTypography>
            </MKBox>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <MKBox component="img" src={type === "1" ? product1_1 : product2_1} width="80%" pl={3}/>
                    </Box>
                </Fade>
            </Modal>
        </Card>
    );
}

// Typechecking props for the TransparentBlogCard
TransparentModalCard.propTypes = {
    image: PropTypes.string.isRequired,
};

export default TransparentModalCard;
