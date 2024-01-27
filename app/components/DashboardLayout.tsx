"use client";
import * as React from "react";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  alpha,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { Switch } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Grid, InputBase } from "@mui/material";
import {
  CalendarIcon,
  InfoIcon,
  DiscountIcon,
  LogoutIcon,
  UserIcon,
  SettingsIcon,
  DashboardIcon,
  LogoIcon,
  BoxIcon,
  AnalyticsIcon,
  DarkIcon,
  LightIcon,
  ArrowRightIcon,
  BellIcon,
} from "../../components/icons";
import { User } from "@nextui-org/react";
import { useTheme as useThemes } from "next-themes";

const drawerWidth = 240;

const scrollbarStyles: CSSObject = {
  "&::-webkit-scrollbar": {
    width: 8,
    height: 20,
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: "100vh",
    background: "#f7f4ed",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#d7efde",
    borderRadius: "100vh",
    border: "3px solid #f6f7ed",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#eafbef",
  },
};
const openedMixin = (theme: Theme): CSSObject => ({
  ...scrollbarStyles,
  width: 68,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  ...scrollbarStyles,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth - 175}px)`,
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#fff",
  color: "black",
  boxShadow: "none",
  borderBottom: "1px solid #E5E5E5",
  display: "flex",
  justifyContent: "center",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // ...(open && {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth - 175}px)`,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #78828A",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const { theme: colorTheme, setTheme } = useThemes();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const topNavItems = [
    {
      icon: <DashboardIcon />,
    },
    {
      icon: <AnalyticsIcon />,
    },
    {
      icon: <UserIcon />,
    },
    {
      icon: <BoxIcon />,
    },
    {
      icon: <DiscountIcon />,
    },
    {
      icon: <InfoIcon />,
    },
  ];

  const themeButtonsItems = [
    {
      icon: <LightIcon />,
    },
    {
      icon: <DarkIcon />,
    },
  ];

  const bottomNavItems = [
    {
      icon: <ArrowRightIcon />,
    },
    {
      icon: <SettingsIcon />,
    },
    {
      icon: <LogoutIcon />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        className="dark:bg-background dark:text-foreground"
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={7}>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "block" },
                      padding: "8px",
                    }}
                  >
                    Dashboard
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Box
                    sx={{
                      padding: "8px",
                    }}
                  >
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon
                          sx={{
                            color: "#78828A",
                          }}
                        />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item xs={6} sm={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <IconButton>
                        <CalendarIcon />
                      </IconButton>
                      <Typography
                        variant="caption"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block" } }}
                      >
                        November 15, 2023
                      </Typography>
                    </Box>

                    <IconButton>
                      <BellIcon />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                      sx={{
                        border: "1px solid #E5E5E5",
                        borderRadius: "50px",
                        p: 0.5,
                        px: 2.5,
                      }}
                    >
                      <User
                        name="Justin Bergson"
                        description="Justin@gmail.com"
                        avatarProps={{
                          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      size="large"
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <User
                        name=""
                        avatarProps={{
                          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                        }}
                      />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer variant="permanent" open={open}>
        <Box
          sx={{
            backgroundColor: "#F7F8FA",
          }}
          className="dark:bg-background dark:text-foreground"
        >
          <DrawerHeader
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              px: [1],
            }}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <LogoIcon /> : <LogoIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {topNavItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: "auto",
                      justifyContent: "center",
                    }}
                    className="dark:text-foreground"
                  >
                    {item.icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List
            sx={{
              width: "80%",
              backgroundColor: "white",
              borderRadius: "50px",
              ml: 0.8,
              mt: -2,
            }}
            className="dark:bg-background dark:text-foreground"
          >
            {themeButtonsItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                {/* set each button to the theme toggle */}
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    px: 2.5,
                  }}
                  onClick={
                    // assign the theme toggle to each button index
                    index === 0
                      ? () => setTheme("light")
                      : () => setTheme("dark")
                  }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              py: [1.5],
            }}
          />
          <List>
            {bottomNavItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="dark:bg-background dark:text-foreground"
      >
        <DrawerHeader />

        {children}
      </Box>
    </Box>
  );
}
