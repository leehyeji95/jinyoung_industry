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
// react-pdf
// import {Document, Page, pdfjs} from 'react-pdf';
import ethicImage from "assets/images/ethic.png";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.mjs',
//     import.meta.url,
// ).toString();


function Ethic() {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    //
    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

    return (
        <>
            <DefaultNavbar
                routes={routes}
                transparent
                light
            />
            <MKBox
                minHeight="75vh"
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
                            지속 가능 경영
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
                <MKBox component="section" py={5}>
                    <Container>
                        <Grid container spacing={3} alignItems="center" mx="auto">
                            <Grid item xs={12} lg={12}>
                                <MKBox component="img" src={ethicImage} width="90%"/>
                            </Grid>
                        </Grid>
                    </Container>
                </MKBox>
                {/*<Container>*/}
                {/*    <Grid item xs={12} lg={12}>*/}
                {/*        <Grid container justifyContent="center" justifyItems="center" alignItems="center">*/}
                {/*            <Grid item xs={9} md={3}>*/}
                {/*                /!*<MKBox>윤리규범*!/*/}
                {/*                /!*    <Document file={ethic1} onLoadSuccess={onDocumentLoadSuccess}>*!/*/}
                {/*                /!*        <Page pageNumber={pageNumber}/>*!/*/}
                {/*                /!*    </Document>*!/*/}
                {/*                /!*</MKBox>*!/*/}
                {/*                <Link to={ethic1} target="_blank">*/}
                {/*                    <ExampleCard image={pdfIcon} name="윤리규범" width="50%"/>*/}
                {/*                </Link>*/}
                {/*            </Grid>*/}
                {/*            <Grid item xs={9} md={3}>*/}
                {/*                <Link to={ethic3} target="_blank">*/}
                {/*                    <ExampleCard image={pdfIcon} name="윤리행동수칙" width="50%"/>*/}
                {/*                </Link>*/}
                {/*            </Grid>*/}
                {/*            <Grid item xs={9} md={3}>*/}
                {/*                <Link to={ethic2} target="_blank">*/}
                {/*                    <ExampleCard image={pdfIcon} name="윤리규정" width="50%"/>*/}
                {/*                </Link>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Container>*/}
                {/*<br/>*/}
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes}/>
            </MKBox>
        </>
    );
}

export default Ethic;