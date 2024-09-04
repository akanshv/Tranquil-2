import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import axios from 'axios';
import { useEffect,useState } from "react";


const colours={
    grey: {
      100: "#141414",
      200: "#292929",
      300: "#3d3d3d",
      400: "#525252",
      500: "#666666",
      600: "#858585",
      700: "#a3a3a3",
      800: "#c2c2c2",
      900: "#e0e0e0",
    },
    primary: {
      100: "#040509",
      200: "#080b12",
      300: "#0c101b",
      400: "#f2f0f0", // manually changed
      500: "#141b2d",
      600: "#1F2A40",
      700: "#727681",
      800: "#a1a4ab",
      900: "#d0d1d5",
    },
    greenAccent: {
      100: "#0f2922",
      200: "#1e5245",
      300: "#2e7c67",
      400: "#3da58a",
      500: "#4cceac",
      600: "#70d8bd",
      700: "#94e2cd",
      800: "#b7ebde",
      900: "#dbf5ee",
    },
    redAccent: {
      100: "#2c100f",
      200: "#58201e",
      300: "#832f2c",
      400: "#af3f3b",
      500: "#db4f4a",
      600: "#e2726e",
      700: "#e99592",
      800: "#f1b9b7",
      900: "#f8dcdb",
    },
    blueAccent: {
      100: "#151632",
      200: "#2a2d64",
      300: "#3e4396",
      400: "#535ac8",
      500: "#6870fa",
      600: "#868dfb",
      700: "#a4a9fc",
      800: "#c3c6fd",
      900: "#e1e2fe",
    },
  }
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const  Soldinfo = () => {
  const [loading,setLoading]=useState(false)
  const [realdata,setrealData]=useState([]);
  const [dashboarddata,setData]=useState([]);
  
  const admin = useSelector((state) => state.auth.admin);
  console.log(admin);
  const Navigate=useNavigate();
  const fetchData=async ()=>{
      setLoading(true);
      try {
            const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/adminproductsmanage`,
            {
              headers: {
                Authorization: admin.token,
              },
            }
            );
            console.log("anmol",data);
            setData(data.prod);
        
        const container=[];

        for (let index = 0; index < data.prod.length; index++) {
          const obj={
               id:index+1,
               Name:data.prod[index].Name,
               Company:data.prod[index].Company,
               author:data.prod[index].author,
               Price:data.prod[index].Price,
               Type:data.prod[index].Type,
               
               
          }
          container.push(obj);
          
        }
        setrealData(container);
        console.log(container);
        setLoading(false); 

        
      } catch (error) {
        setLoading(false)
        console.log(error)
        return
      }
  }
  
useEffect(()=>{
      // console.log(dashboarddata);
      fetchData();
      console.log(realdata);
},[])

  const columns=[
    { field: "id", headerName: "S.No", flex: 0.3,type:"number", },
    { field: "Name", headerName: "ProductName", flex: 1 },
    { field: "Price", headerName: "Cost", flex: 1 },
    { field: "author", headerName: "Author", flex: 1 },
    { field: "Company", headerName: "Company", flex: 1 },
    // { field: "Stock", headerName: "Stock", flex: 0.5 },
    { field: "Type", headerName: "Type", flex: 2 },
  ]

 

  return (
    <Box m="20px">
      <div>
        <p className="text-2xl p-4 text-gray-700 font-semibold">Products Stats</p>
      </div>
      <Box
        m="10px 0 0 0"
        height="75vh"
        width="100%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colours.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colours.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colours.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colours.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colours.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colours.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={realdata}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Soldinfo;
