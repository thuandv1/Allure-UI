import { useEffect, useState } from "react";

function Demo() {
  const [data, setData] = useState([]);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const resData = await response.json();

      setData(resData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData("example/api");
  }, []);

  return <></>;
}

export default Demo;
