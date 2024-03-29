import { routes } from "configs";

import AutoCompleteContent from "components/libs/AutoCompleteContent";
import MainContent from "components/libs/MainContent";
import ButtonContent from "components/libs/ButtonContent/ButtonContent";
import DesignPrincipleContent from "components/libs/DesignPrincipleContent";
import IconGalleryContent from "components/libs/IconGalleryContent";
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
import ChangeLog from "components/libs/ChangeLog";
import CommonI18N from "components/libs/CommonI18N";
import CommonProduct from "components/libs/CommonProduct/CommonProduct";
import CheckBox from "components/libs/CheckBox";
import DatePicker from "components/libs/DatePicker/DatePicker";
import Demo from "components/libs/Demo/Demo";

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
    component: ChangeLog
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
    path: routes.CommonI18NTerms,
    component: CommonI18N
  },
  {
    path: routes.CommonProduct,
    component: CommonProduct
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
    path: routes.Checkbox,
    component: CheckBox
  },
  {
    path: routes.DatePicker,
    component: DatePicker
  },
  {
    path: routes.Dialog,
    component: Dialog
  },
  {
    path: routes.DemoPage,
    component: Demo
  }
];

export { publicRoutes };
