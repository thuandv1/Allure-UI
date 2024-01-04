import Content from "components/base/Content";
import { commonProduct } from "data/commonProduct";
import { useTranslation } from "react-i18next";

function CommonProduct() {
  const [t] = useTranslation(["common_product", "common"]);

  return (
    <Content
      title={t("title")}
      desc={t("desc", { app: t("common:app_name", { text: "" }) })}
    >
      <table
        style={{
          marginLeft: 10,
          marginTop: 20,
          borderSpacing: "50px 20px"
        }}
      >
        <thead style={{ marginBottom: 20 }}>
          <tr>
            <td style={{ marginRight: 30 }}>{t("name")}</td>
            <td>{t("icon")}</td>
          </tr>
        </thead>
        <tbody>
          {commonProduct.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>
                <img src={product.image} alt="" srcSet="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  );
}

export default CommonProduct;
