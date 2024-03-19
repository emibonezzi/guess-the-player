import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ModalOnAnswer from "./ModalOnAnswer";

const Layout = () => {
  return (
    <Box>
      <ModalOnAnswer />
      <Outlet />
    </Box>
  );
};

export default Layout;
