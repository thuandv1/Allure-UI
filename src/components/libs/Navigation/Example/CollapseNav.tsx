import * as React from "react";
import { INavLinkGroup, INavLink, Nav } from "@gui/fluent-ui-allure";

import { Logo } from "assets/images";

const sidebarStyle = {
  width: "fit-content",
  height: 500,
  background: "#171D24"
};

const logoStyle = {
  display: "flex"
};

const imageStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  margin: "auto"
};

const navs: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Dashboard",
        url: "#/navigationmenu",
        key: "k1",
        iconProps: {
          iconName: "fas-chart-pie"
        }
      },
      {
        name: "User Management",
        title: "User Management",
        url: "",
        iconProps: {
          iconName: "fas-user"
        },
        isExpanded: true,
        key: "k2",
        links: [
          {
            name: "Sub nav item1",
            url: "#/navigationmenu",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k21"
          },
          {
            name: "Sub nav item2",
            url: "#/navigationmenu",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k22"
          },
          {
            name: "Sub nav item3",
            url: "#/navigationmenu",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k23"
          }
        ]
      },
      {
        name: "Templates",
        url: "#/navigationmenu",
        iconProps: {
          iconName: "fas-layer-group"
        },
        key: "k5"
      }
    ]
  },
  {
    links: [
      {
        name: "Help",
        url: "#/navigationmenu",
        iconProps: {
          iconName: "fas-circle-question"
        },
        key: "k8"
      },
      {
        name: "Settings",
        url: "#/navigationmenu",
        iconProps: {
          iconName: "fas-gear"
        },
        key: "k9"
      }
    ]
  }
];

// interface IProps {
// }

interface IState {
  selectedKey?: string;
}

export class NavigationCollapsedView extends React.Component<unknown, IState> {
  constructor(props: any) {
    super(props);
    this.state = { selectedKey: "k1" };
  }
  _onLinkClick(ev?: any, item?: INavLink) {
    console.log(ev);
    this.setState({ selectedKey: item?.key });
  }
  setLogo(): JSX.Element {
    return (
      <div style={logoStyle}>
        <img alt="" style={imageStyle} src={Logo} />
      </div>
    );
  }

  render() {
    return (
      <div style={sidebarStyle}>
        <Nav
          onLinkClick={(e, i) => this._onLinkClick(e, i)}
          selectedKey={this.state.selectedKey}
          groups={navs}
          onRenderLogo={this.setLogo}
          collapsedMode={true}
        />
      </div>
    );
  }
}
