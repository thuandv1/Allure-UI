import * as React from "react";
import { INavLinkGroup, INavLink, Nav } from "@gui/fluent-ui-allure";

const backgroundStyle = {
  width: "100%",
  height: "100%",
  padding: "20px"
};

const sidebarStyle = {
  width: "fit-content",
  height: 500,
  background: "white"
};

const logoStyle = {
  padding: "12px 16px"
};

const imageStyle: React.CSSProperties = {
  maxHeight: 48,
  maxWidth: 180
};

const textStyle = {
  color: "black",
  fontSize: 16
};

const navs: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Dashboard",
        url: "#/navigationmenulight",
        key: "k1",
        iconProps: {
          iconName: "fas-chart-pie"
        }
      },
      {
        name: "User Management",
        url: "",
        iconProps: {
          iconName: "fas-user"
        },
        isExpanded: true,
        key: "k2",
        links: [
          {
            name: "Sub nav item1",
            url: "#/navigationmenulight",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k21"
          },
          {
            name: "Sub nav item2",
            url: "#/navigationmenulight",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k22"
          },
          {
            name: "Sub nav item3",
            url: "#/navigationmenulight",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k23"
          }
        ]
      },
      {
        name: "Templates",
        url: "#/navigationmenulight",
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
        url: "#/navigationmenulight",
        iconProps: {
          iconName: "fas-circle-question"
        },
        key: "k8"
      },
      {
        name: "Settings",
        url: "#/navigationmenulight",
        iconProps: {
          iconName: "fas-gear"
        },
        key: "k9"
      }
    ]
  }
];

interface IState {
  selectedKey?: string;
  isCollapsed?: boolean;
}

export class NavView extends React.Component<unknown, IState> {
  constructor(props: any) {
    super(props);
    this.state = { selectedKey: "k1", isCollapsed: false };
  }
  _onLinkClick(ev?: any, item?: INavLink) {
    this.setState({ selectedKey: item?.key });
  }
  _onCollapsedCheck(isCollapsed?: boolean) {
    this.setState({ isCollapsed: isCollapsed });
  }
  setLogo(): JSX.Element {
    return (
      <div style={logoStyle}>
        <img
          alt=""
          style={imageStyle}
          src={
            "https://res.cdn.avepointonlineservices.com/onlineproductlogo/allure_in_light.png"
          }
        />
      </div>
    );
  }

  render() {
    return (
      <div style={backgroundStyle}>
        <div style={sidebarStyle}>
          <Nav
            isLightMode={true}
            enableAnimationEffect={true}
            onLinkClick={(e, i) => this._onLinkClick(e, i)}
            selectedKey={this.state.selectedKey}
            groups={navs}
            onRenderLogo={this.setLogo}
            onCollapsedCheck={(i) => this._onCollapsedCheck(i)}
            expandTooltip="Expand"
            collapseTooltip="Collapse"
            isCollapsed={this.state.isCollapsed}
          />
        </div>
      </div>
    );
  }
}
