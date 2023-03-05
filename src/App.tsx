import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SigninPage from "./components/SigninPage";
import TitleBox from "./components/TitleBox";
import MainLayout from "./layouts/MainLayout";

import QuestionPage from "./components/QuestionPage";


const App: React.FC = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: {
            sm: "90vw",
            xs: "90vw",
            md: "60vw",
            lg: "60vw",
            xl: "60vw",
          },
        }}
      >
        {/* GRID SYSTEM */}
        <Grid container height="90vh">
          <SigninPage />

          <TitleBox />
        </Grid>
        {/* GRID SYSTEM END */}
      </Box>
    </MainLayout>
  );
};

export default App;
