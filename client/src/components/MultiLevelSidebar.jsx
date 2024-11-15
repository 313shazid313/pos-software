import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  IconButton,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <IconButton
        variant="text"
        className="lg:hidden m-4"
        onClick={toggleSidebar}
      >
        <Bars3Icon className="h-6 w-6" />
      </IconButton>

      {/* Sidebar */}
      <Card
        className={`fixed h-screen lg:static top-0 left-0 w-64 max-w-xs p-4 shadow-xl shadow-blue-gray-900/5
          transition-transform transform bg-white lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close Button for Mobile */}
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
          <IconButton variant="text" onClick={toggleSidebar}>
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </div>

        <List>
          <Link to="/">
            <ListItem >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
              <ListItemSuffix>
              </ListItemSuffix>
            </ListItem>
          </Link>

          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                  }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  E-Commerce
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Link to="/existing-products">
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>

              </ListItemSuffix>
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

      <div className="flex-1 p-8 mt-16 lg:mt-0">
        <Outlet />
      </div>

    </div>
  );
}
