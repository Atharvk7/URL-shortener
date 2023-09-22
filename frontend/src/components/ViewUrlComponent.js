import React, { useEffect, useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ViewUrlComponent = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrlAndSetUrl = async () => {
      const result = await axios.get("http://localhost:3333/all");
      setUrls(result.data);
    };
    fetchUrlAndSetUrl();
  }, [urls]);

  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Original Url</th>
            <th>Short Url</th>
            <th>Click Count</th>
            <th>Copy</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, idx) => (
            <tr key={idx}>
              <td>{url.origUrl}</td>
              <td>
                <a href={`${url.shortUrl}`}>{url.shortUrl}</a>
              </td>
              <td>{url.clicks}</td>
              <td>
                <CopyToClipboard text={url.shortUrl}>
                  <button>Copy</button>
                </CopyToClipboard>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUrlComponent;
