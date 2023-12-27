import * as React from "react";
import { INavLinkGroup, INavLink, Nav } from "@gui/fluent-ui-allure";

const sidebarStyle = {
  width: "fit-content",
  height: 500
  // background: '#171D24'
};

const logoStyle = {
  padding: "12px 16px"
};

const imageStyle: React.CSSProperties = {
  maxHeight: 48,
  maxWidth: 180
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
        name: "User Management with long title",
        title: "User Management with long title",
        url: "",
        iconProps: {
          iconName: "fas-user"
        },
        isExpanded: true,
        key: "k202",
        links: [
          {
            name: "Sub nav item1 with long long titlelong long titlelong long titlelong long titlelong long titleg titlelong long titlelong long titleg titlelong long titlelong long titleg titlelong long titlelong long title",
            url: "#/navigationmenu",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k212"
          },
          {
            name: "Sub nav item2",
            url: "#/navigationmenu",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k222"
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
            "https://res.cdn.avepointonlineservices.com/onlineproductlogo/allure_in_dark.png"
          }
        />
      </div>
    );
  }

  render() {
    return (
      <div style={sidebarStyle}>
        <Nav
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
    );
  }
}
