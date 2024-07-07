import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKTypography from "../../../../components/MKTypography";
import MKBox from "../../../../components/MKBox";
import * as React from "react";
import routes from "../../../../routes";
import DefaultNavbar from "../../../../examples/Navbars/DefaultNavbar";
import bgImage from "../../../../assets/images/about_bg.png";
import DefaultFooter from "../../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../../footer.routes";

import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import ethic1 from "assets/pdfs/ethic1.pdf";
import ethic2 from "assets/pdfs/ethic2.pdf";
import ethic3 from "assets/pdfs/ethic3.pdf";
import environ1 from "assets/pdfs/environ1.pdf";

function FileBoard() {

    return (
        <>
            <DefaultNavbar
                routes={routes}
                transparent
                light
            />
            <MKBox
                minHeight="45vh"
                width="100%"
                sx={{
                    backgroundImage: ({functions: {linearGradient, rgba}, palette: {gradients}}) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center"
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={3}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{mx: "auto", textAlign: "center"}}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({breakpoints, typography: {size}}) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"]
                                }
                            })}
                        >
                            전자공고
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: {xs: 2, lg: 3},
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({palette: {white}, functions: {rgba}}) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({boxShadows: {xxl}}) => xxl,
                }}
            >
                <Grid container spacing={3} sx={{ mt: 8 }}>
                    <Grid item xs={12} md={6} lg={4}>
                        <DefaultReviewCard
                            // color="gray"
                            name="환경경영정책"
                            date="2024.07.07"
                            file={environ1}
                            filename="진영공업_환경경영정책.pdf"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DefaultReviewCard
                            // color="secondary"
                            name="윤리규범"
                            date="2024.07.07"
                            file={ethic1}
                            filename="진영공업_윤리규범.pdf"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DefaultReviewCard
                            // color="gray"
                            name="윤리규정"
                            date="2024.07.07"
                            file={ethic2}
                            filename="진영공업_윤리규정.pdf"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DefaultReviewCard
                            // color="gray"
                            name="윤리행동지침"
                            date="2024.07.07"
                            file={ethic3}
                            filename="진영공업_윤리행동지침.pdf"
                        />
                    </Grid>
                </Grid>
                <br/>
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes}/>
            </MKBox>
        </>
    );
}

export default FileBoard;