import { VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { colors } from "../theme";

const CustomInput: React.FC<{
  isIconActive: boolean;
  label: string;
  placeholder: string;
}> = ({ isIconActive, label, placeholder }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="flex-start"
      mb={2}
    >
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        
        <Typography color="white" pb={1}>
          {label}
        </Typography>
        
        <Paper
          sx={{
            background: colors.input[500],
            width: "100%"
          }}
        >
          <InputBase
            placeholder={placeholder}
            fullWidth
            sx={{
              bgcolor: colors.input[500],
              p: 1,
              borderRadius: "5px",
            }}
            
            endAdornment={
            <>
              <select id="test_select" >
            <option value="1">Agriculture</option>
            <option value="2">Arts</option>
            <option value="3">Construction</option>
            <option value="4">Consumer Goods</option>
            <option value="5">Corporate Services</option>
            <option value="6">Design</option>
            <option value="7">Education</option>
            <option value="8">Energy & Mining</option>
            <option value="9">Entertainment</option>
            <option value="10">Finance</option>
            <option value="11">Hardware & Networking</option>
            <option value="12">Health Care</option>
            <option value="13">Legal</option>
            <option value="14">Manufacturing</option>
            <option value="15">Media & Communications</option>
            <option value="16">Nonprofit</option>
            <option value="17">Public Administration</option>
            <option value="18">Public Safety</option>
            <option value="19">Real Estate</option>
            <option value="20">Recreation & Travel</option>
            <option value="21">Retail</option>
            <option value="22">Software & IT Services</option>
            <option value="23">Transportation & Logistics</option>
            <option value="24">Wellness & Fitness</option>



          </select>

              {isIconActive && (
                
                <InputAdornment position="end" sx={{ pr: 1 }}>
                  
                  <IconButton edge="end">
                  
                    <VisibilityOff />
                    
                  </IconButton>
                </InputAdornment>
              )}
          </>
            }
          />
          
          
        </Paper>

       
          
        


      </Box>
    </Box>
  );
};

export default CustomInput;
