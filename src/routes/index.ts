import AutoCompleteContent from "components/libs/AutoCompleteContent";
import MainContent from "components/libs/MainContent";
import { routes } from "configs";
import ButtonContent from "components/libs/ButtonContent/ButtonContent";
import DesignPrincipleContent from "components/libs/DesignPrincipleContent";
import IconGalleryContent from "components/libs/IconGalleryContent/IconGalleryContent";
import IconContent from "components/libs/IconContent";
import Dialog from "components/libs/Dialog";
import Typography from "components/libs/Typography";
import Breadcrumb from "components/libs/Breadcrumb";
import Navigation from "components/libs/Navigation";
import NavigationLight from "components/libs/NavigationLight";
import Tab from "components/libs/Tab";
import Tree from "components/libs/Tree";
import Wizard from "components/libs/Wizard";
import Avatar from "components/libs/Avatar";

const publicRoutes = [
  {
    path: routes.Home,
    component: MainContent
  },
  {
    path: routes.AutoComplete,
    component: AutoCompleteContent
  },
  {
    path: routes.DesignPrinciple,
    component: DesignPrincipleContent
  },
  {
    path: routes.ChangeLog,
    component: DesignPrincipleContent
  },
  {
    path: routes.Button,
    component: ButtonContent
  },
  {
    path: routes.IconGallery,
    component: IconGalleryContent
  },
  {
    path: routes.Icon,
    component: IconContent
  },
  {
    path: routes.CommonProduct,
    component: IconGalleryContent
  },
  {
    path: routes.Typography,
    component: Typography
  },
  {
    path: routes.Breadcrumb,
    component: Breadcrumb
  },
  {
    path: routes.NavigationMenu,
    component: Navigation
  },
  {
    path: routes.NavigationMenuLight,
    component: NavigationLight
  },
  {
    path: routes.Tab,
    component: Tab
  },
  {
    path: routes.Tree,
    component: Tree
  },
  {
    path: routes.Wizard,
    component: Wizard
  },
  {
    path: routes.Avatar,
    component: Avatar
  },
  {
    path: routes.Dialog,
    component: Dialog
  }
];

export { publicRoutes };
