import { useTranslation } from "react-i18next";

import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { SampleBasic } from "./Example/Basic";
import { code } from "data/checkBox";
import { SampleDisabled } from "./Example/Disable";
import { SampleCheckAll } from "./Example/Checkall";
import { useCallback, useEffect, useState } from "react";

function CheckBox() {
  const [t] = useTranslation(["checkbox", "common"]);
  const [data, setData] = useState([]);

  const fetchData = async (url: string) => {
    const response = fetch(url, {
      method: "GET"
    }).then((res) => res.json());

    return response;
  };

  const fetchingData = async (url: string) => {
    try {
      const response = await fetch(url);

      return response.json();
    } catch (error) {}
  };

  const apiUrls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
  ];

  Promise.all(apiUrls.map((url) => fetchingData(url))).then((results) =>
    console.log({ results })
  );

  // Promise.all(apiUrls.map((url) => fetchData(url)))
  //   .then((results) => {
  //     console.log("All API calls completed successfully:", results);
  //     // Process the results here
  //   })
  //   .catch((error) => {
  //     console.error("Error in one of the API calls:", error);
  //     // Handle the error here
  //   });

  // const promise1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject("Promise 1 resolved");
  //   }, 1000);
  // });

  // const promise2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Promise 2 resolved");
  //   }, 3000);
  // });

  // const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Promise 3 resolved");
  //   }, 200000);
  // });

  // Promise.all([promise1, promise2, promise3])
  //   .then((values) => {
  //     console.log({ values });
  //   })
  //   .catch((error) => console.log({ error }));

  // useEffect(() => {
  //   // fetchData();
  // }, []);

  const array = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = array.filter((value, index, originalArr) => {
    // console.log({ originalArr }); //index of return index of value and check
    return originalArr.indexOf(value) === index; //check index element current is a first element valid
  });
  // console.log({ uniqueArray });

  return (
    <></>
    // <Content title={t("title")} desc={t("desc")}>
    //   <SectionContent
    //     title={t("common:basic_usage")}
    //     uses={[t("basic_1"), t("basic_2")]}
    //     component={<SampleBasic />}
    //     extraCode={code.sample}
    //   />
    //   <SectionContent
    //     title={t("disabled")}
    //     component={<SampleDisabled />}
    //     extraCode={code.disabled}
    //   />
    //   <SectionContent
    //     title={t("check_all")}
    //     component={<SampleCheckAll />}
    //     extraCode={code.checkAll}
    //   />
    // </Content>
  );
}

export default CheckBox;
