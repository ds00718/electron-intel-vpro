import React from "react";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
var sudo = require("sudo-prompt");

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState("");
  const [exist, setExist] = useState("");

  function fetchvpro() {
    setLoading(true);
    var options = {
      name: "Electron",
      icns: "/Applications/Electron.app/Contents/Resources/Electron.icns", // (optional)
    };
    sudo.exec(
      "PlatformDiscovery.exe",
      options,
      function (error, stdout, stderr) {
        if (error) throw error;
        const parser = new DOMParser();
        const xmlDoc = parser
          .parseFromString(stdout, "text/xml")
          .getElementsByTagName("Solution");
        var i;
        for (i = 0; i < xmlDoc.length; i++) {
          if (xmlDoc[i].getAttribute("name") === "Intel(R) AMT") {
            const valStatus = xmlDoc[i].getAttribute("state");
            const valExist = xmlDoc[i].getAttribute("exist");
            if (valExist === "false" && valStatus === "not supported") {
              Router.push("./double_none");
              return;
            }
            if (valExist === "true" && valStatus === "configured") {
              Router.push("./all_set2");
            }
            if (valExist === "true" && valStatus === "not configured") {
              Router.push("./not_conf");
            }
            setStatus(valStatus);
            setExist(valExist);
          }
        }
        setLoading(false);
        setLoaded(true);
      }
    );
  }

  return (
    <React.Fragment>
      <>
        <Head>
          <title> GCA Intel® Core™ vPro® Detector</title>
          <link
            rel="shortcut icon"
            href="./images/GCA.png"
            type="image/x-icon"
          ></link>
        </Head>

        <div id="page" className="fade-in">
          <div className="heading">
          <h1 className="p-8 text-4xl font-semibold text-center ">
            <img className="leftPhoto" src="./images/GCA.png" />
            <img className="rightPhoto" src="./images/thumbnail.jpg" />
            GCA Intel® Core™ vPro® Detector
          </h1>
          <hr></hr>
          </div>

          <div className="flex justify-center pt-8">
          <p className="p_mp">
                  Use the button below to find out if your PC is a vPro platform
                  and whether it has remote management capabilities enabled by
                  Intel Active Management Technology®
                </p>
            {!loading && !loaded && (
              <div className="vertical-center">
                <button
                  className="px-6 py-4 font-semibold text-blue-700 bg-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
                  onClick={fetchvpro}
                >
                  Run Test
                </button>
              </div>
            )}
            {loading && !loaded && <div class="lds-dual-ring"></div>}
          </div>
        </div>
        <div id="footer">
          <p>
            No information is collected from the download or use of this tool.
            GCA and Intel care about your privacy. View the&nbsp;
            <a
              target="_blank"
              href="https://www.globalcyberalliance.org/privacy-policy/#:~:text=Privacy%20Policy.%20The%20mission%20of%20the%20Global%20Cyber,this%20Website,%20and%20this%20policy%20discusses%20our%20practices."
              className="text-blue-500 underline"
            >
              GCA
            </a>
            &nbsp;and&nbsp;
            <a
              target="_blank"
              href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html"
              className="text-blue-500 underline"
            >
              Intel
            </a>
            &nbsp;Privacy Policies here.
          </p>
        </div>
      </>
    </React.Fragment>
  );
};

export default Home;
