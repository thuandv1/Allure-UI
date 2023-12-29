import * as React from "react";
import { INavLinkGroup, INavLink, Nav } from "@gui/fluent-ui-allure";
import { NavViewProps } from "components/libs/Navigation/Example/BasicNav";
import { withTranslation } from "react-i18next";

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
        name: "dashboard",
        url: "#/navigationmenulight",
        key: "k1",
        iconProps: {
          iconName: "fas-chart-pie"
        }
      },
      {
        name: "user_management",
        url: "",
        iconProps: {
          iconName: "fas-user"
        },
        isExpanded: true,
        key: "k2",
        links: [
          {
            name: "sub_nav_item1",
            url: "#/navigationmenulight",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k21"
          },
          {
            name: "sub_nav_item3",
            url: "#/navigationmenulight",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k22"
          },
          {
            name: "sub_nav_item3",
            url: "#/navigationmenulight",
            iconProps: {
              iconName: "fas-arrow-right"
            },
            key: "k23"
          }
        ]
      },
      {
        name: "templates",
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
        name: "help",
        url: "#/navigationmenulight",
        iconProps: {
          iconName: "fas-circle-question"
        },
        key: "k8"
      },
      {
        name: "settings",
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

export class NavView extends React.Component<NavViewProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { selectedKey: "k1", isCollapsed: false };
    this.props.t("navigation_menu");
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
    const { t } = this.props;

    return (
      <div style={backgroundStyle}>
        <div style={sidebarStyle}>
          <Nav
            isLightMode={true}
            enableAnimationEffect={true}
            onLinkClick={(e, i) => this._onLinkClick(e, i)}
            selectedKey={this.state.selectedKey}
            groups={navs.map((item: INavLinkGroup) => ({
              ...item,
              links: item.links.map((link) => {
                if (link?.links?.length) {
                  return {
                    ...link,
                    links: link.links.map((subLink) => ({
                      ...subLink,
                      name: t(subLink.name)
                    })),
                    name: t(link.name)
                  };
                }
                return {
                  ...link,
                  name: t(link.name)
                };
              })
            }))}
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

const TranslatedNavView = withTranslation("navigation_menu")(NavView);

export default TranslatedNavView;
