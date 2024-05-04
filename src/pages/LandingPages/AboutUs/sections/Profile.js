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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/icon-jy.png"

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h2">진영공업</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                {/*<Grid item>*/}
                {/*  <MKTypography component="span" variant="body3" fontWeight="bold">*/}
                {/*    대표이사&nbsp;&nbsp;*/}
                {/*  </MKTypography>*/}
                {/*  <MKTypography component="span" variant="body3" color="text">*/}
                {/*    이영웅*/}
                {/*  </MKTypography>*/}
                {/*</Grid>*/}
                <Grid item>
                  <MKTypography component="span" variant="body3" fontWeight="bold">
                    설립일&nbsp;&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body3" color="text">
                    2002년 9월
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body3" fontWeight="bold">
                    주 생산품&nbsp;&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body3" color="text">
                    자동차 SEAT 조립용 플라스틱 사출품
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container mb={7}>
                <Grid item>
                  <MKTypography variant="body2" fontWeight="medium" color="text">
                    진영공업 주식회사는 2002년 설립 이래 최고의 자동차 시트용 플라스틱 제품 공급을 위해 항상 노력하고 있습니다.<br/>
                    이를 위해 제 3공장 준공 및 사출 설비 증설을 통하여 제품 기술향상 고객사에 품질, 납기에 최선을 다하고 있습니다.<br/>
                    <br/>
                    또한 우리는 인간중심, 환경, 사회를 생각하는 새로운 가치 시대의 리더로 ESG 경영을 실천합니다.<br/>
                    진영공업 주식회사를 아껴주시는 고객 모두의 기대와 요구에 부합하도록 우리 임직원 모두가 정진하겠습니다.<br/>
                  </MKTypography>
                </Grid>
              </Grid>
              <br/>
              <Grid item textAlign="right">
                <MKTypography component="span" variant="body3" >
                  대표이사&nbsp;&nbsp;
                </MKTypography>
                <MKTypography component="span" variant="h3" color="text" fontWeight="bold">
                  이영웅
                </MKTypography>
              </Grid>

            {/*    <Grid item>*/}
            {/*      <MKTypography variant="body2" fontWeight="light" color="text" mr={4}>*/}
            {/*        2002.09 진영공업(주) 설립<br />*/}
            {/*        2002.11 사출설비 가동시작 (350톤 2대)<br />*/}
            {/*        2002.12 사출설비 증설(350톤 1대, 450톤 2대)<br />*/}
            {/*        2003.01-02 대원산업(주) 평택/안산공장 납품개시<br />*/}
            {/*        2003.05 카니발 BACK GARNISH (하드보드->PP) 개발<br />*/}
            {/*        2003.07 사출설비 증설(450톤 1대, ROBOT 1대)<br />*/}
            {/*        2003.09 현대/기아 SQ업체 인증 취득<br />*/}
            {/*      </MKTypography>*/}
            {/*    </Grid>*/}
            {/*    <Grid item>*/}
            {/*      <MKTypography variant="body2" fontWeight="light" color="text">*/}
            {/*        2004.12 사출설비 증설(650톤 2대, ROBOT 2대)<br />*/}
            {/*        2005.01 대원산업(주) 안산/서산공장 납품개시<br />*/}
            {/*        2005.08 ISO 9001:2000 인증(한국능률협회)<br />*/}
            {/*        2008.03 3차원 측정기 도입 설치<br />*/}
            {/*        2009.09-10 MSEAT YF차종/GH차종 개발 양산<br />*/}
            {/*        2010.03 ISO 14001:2004 인증<br />*/}
            {/*        2010.10 사출설비 증설(450톤 1대, ROBOT 1대)<br />*/}
            {/*      </MKTypography>*/}
            {/*    </Grid>*/}
            {/*    <Grid item>*/}
            {/*      <MKTypography variant="body2" fontWeight="light" color="text">*/}
            {/*        2011.01 MSEAT HG차종, 대원산업 TA차종 개발 양산<br />*/}
            {/*        2012.08 대원산업 YD차종 개발 양산<br />*/}
            {/*        2014.03 MSEAT LF(YF후속)차종 개발 양산<br />*/}
            {/*        2014.06 대원산업 YP(VQ후속)차종 개발 양산<br />*/}
            {/*        2016.04-05 대원산업 DE(신차),GSr(신차)<br/>*/}
            {/*        2016.11 대원산업 HCr(RBr후속),YB(UB후속)차종 개발 양산<br />*/}
            {/*        2017.01 대원산업 JA(TA후속)차종 개발 양산<br />*/}
            {/*      </MKTypography>*/}
            {/*    </Grid>*/}
            {/*    <Grid item>*/}
            {/*      <MKTypography variant="body2" fontWeight="light" color="text">*/}
            {/*        2018.08 IATF16949:2016 인증획득<br />*/}
            {/*        2019.09-11 MSEAT HM PE2차종, IG PE차종 양산<br />*/}
            {/*        2020.07 대원산업 KA4(YP후속)차종 양산<br />*/}
            {/*        2021.05 대원산업 SU2r(GSr후속)차종 양산<br />*/}
            {/*        2021.10 사출설비 증설(680톤, 1050톤 ROBOT)<br />*/}
            {/*        2022.01 대원산업 SG2(DE후속)차종 양산<br />*/}
            {/*        2022.11 MSEAT GN7(IG후속)차종 양산<br />*/}
            {/*      </MKTypography>*/}
            {/*    </Grid>*/}
            {/*  </Grid>*/}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
