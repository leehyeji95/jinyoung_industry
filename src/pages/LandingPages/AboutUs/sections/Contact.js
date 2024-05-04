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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "";
import {Map, MapMarker} from "react-kakao-maps-sdk";

function Contact() {
    return (
        <MKBox component="section" py={{xs: 0, lg: 6}}>
            <MKTypography variant="h3" color="gray" fontWeight="bold">
                오시는 길
            </MKTypography>
            <br/>
            <Container>
                <Grid container item>
                    <MKBox
                        width="100%"
                        bgColor="white"
                        borderRadius="xl"
                        shadow="xl"
                        mb={6}
                        sx={{overflow: "hidden"}}
                    >
                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={12}
                                lg={4}
                                position="relative"
                                px={0}
                                sx={{
                                    backgroundImage: ({
                                                          palette: {gradients},
                                                          functions: {rgba, linearGradient},
                                                      }) =>
                                        `${linearGradient(
                                            rgba(gradients.dark.main, 0.8),
                                            rgba(gradients.dark.state, 0.8)
                                        )}`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <MKBox
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="100%"
                                    height="100%"
                                >
                                    <MKBox py={6} pr={12} pl={{xs: 6, sm: 12}} my="auto">
                                        <MKTypography variant="h3" color="white" mb={1}>
                                            진영공업
                                        </MKTypography>
                                        <MKBox display="flex" p={1}>
                                            <MKTypography variant="button" color="white">
                                                <i className="fas fa-phone"/>
                                            </MKTypography>
                                            <MKTypography
                                                component="span"
                                                variant="button"
                                                color="white"
                                                opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                (+82) 031-323-2151, 2152
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox display="flex" color="white" p={1}>
                                            <MKTypography variant="button" color="white">
                                                <i className="fas fa-envelope"/>
                                            </MKTypography>
                                            <MKTypography
                                                component="span"
                                                variant="button"
                                                color="white"
                                                opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                lyw6150@naver.com
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox display="flex" color="white" p={1}>
                                            <MKTypography variant="button" color="white">
                                                <i className="fas fa-map-marker-alt"/>
                                            </MKTypography>
                                            <MKTypography
                                                component="span"
                                                variant="button"
                                                color="white"
                                                opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                경기도 용인시 처인구 백암면 고안로 53
                                            </MKTypography>
                                        </MKBox>
                                    </MKBox>
                                </MKBox>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <MKBox pt={0.5} pb={2} px={2}>
                                    <Grid item xs={12} lg={12}>
                                        <Map center={{lat: 37.13278733758951, lng: 127.40413767729119}}
                                             style={{width: "100%", height: "500px"}}>
                                            <MapMarker position={{
                                                lat: 37.13278733758951,
                                                lng: 127.40413767729119
                                            }}></MapMarker>
                                        </Map>
                                    </Grid>
                                </MKBox>
                            </Grid>
                        </Grid>
                    </MKBox>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Contact;
