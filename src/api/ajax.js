import axios from "axios";
export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "GET") {
      let dataStr = "";
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }

      // 发请求GET
      promise = axios.get(url);
    } else {
      // 发请求POST
      promise = axios.post(url, data);
    }
    promise.then(
      response => {
        resolve(response.data);
      },
      rejected => {
        reject(rejected);
      }
    );
  });
}
