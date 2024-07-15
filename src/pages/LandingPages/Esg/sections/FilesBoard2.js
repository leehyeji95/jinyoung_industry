import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKTypography from "../../../../components/MKTypography";
import MKBox from "../../../../components/MKBox";
import * as React from "react";
import {useMemo} from "react";
import routes from "../../../../routes";
import DefaultNavbar from "../../../../examples/Navbars/DefaultNavbar";
import bgImage from "../../../../assets/images/about_bg.png";
import DefaultFooter from "../../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../../footer.routes";
import {MaterialReactTable, useMaterialReactTable} from 'material-react-table';
import filesData from "./data/filesData";

import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function FileBoard2() {
    // 지역변수 선언하고 사용
    const data = filesData;

    const columns = useMemo(
        () => [
            {
                accessorKey: 'no', //access nested data with dot notation
                header: 'No',
                size: 50,
                grow: false,
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                accessorKey: 'title', //access nested data with dot notation
                header: 'Title',
                size: 200,
                Cell: ({ renderedCellValue, row }) => (
                    <a href='${row.file}' target="_blank">
                        {renderedCellValue}
                    </a>
                ),
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                accessorKey: 'date', //access nested data with dot notation
                header: 'Date',
                size: 150,
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns, data,
        enableFullScreenToggle: false,
        enableColumnActions: false,
        // muiTableBodyProps: () => ({
        //     sx: {
        //         cursor: 'pointer', //you might want to change the cursor too when adding an onClick
        //     },
        // })
    });

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
                            시행규칙
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
                {/*<MKBox component="section" py={5}>*/}
                {/*    <Container>*/}
                {/*        <Grid container alignItems="center" mx="auto">*/}
                {/*            <Grid item xs={12} lg={12}>*/}
                {/*                /!*<MKBox component="img" src={environImage} width="100%"/>*!/*/}
                {/*                <MaterialReactTable table={table} />*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </Container>*/}
                {/*</MKBox>*/}

                <Grid container spacing={3} sx={{ mt: 8 }}>
                    <Grid item xs={12} md={6} lg={4}>
                        <DefaultReviewCard
                            name="Nick Willever"
                            date="1 day ago"
                            review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
                            rating={5}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DefaultReviewCard
                            color="info"
                            name="Shailesh Kushwaha"
                            date="1 week ago"
                            review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
                            rating={5}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DefaultReviewCard
                            name="Samuel Kamuli"
                            date="3 weeks ago"
                            review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
                            rating={5}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <DefaultReviewCard
                            name="Samuel Kamuli"
                            date="3 weeks ago"
                            review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
                            rating={5}
                        />
                    </Grid>
                </Grid>
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes}/>
            </MKBox>
        </>
    );
}

export default FileBoard2;