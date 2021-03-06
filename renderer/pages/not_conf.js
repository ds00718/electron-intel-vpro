export default function Double_None() {
  return (
    <div id="page" className="text-center">
      <div className="flex justify-center pt-8">
          <div className="vertical-center">
          <Collapsible trigger="vPro®" transitionTime="200">
              <p>
                This PC is vPro certified, and is recieving additional security
                protection.
              </p>
            </Collapsible>
            <Collapsible trigger="AMT" transitionTime="200">
              <p>
              Intel Active Management Technology is available but has not been configured.
              Learn more about AMT™,{" "}
                <a
                  target="_blank"
                  href="https://www.intel.co.uk/content/www/uk/en/architecture-and-technology/vpro/vpro-platform-general.html"
                  className="text-blue-500 underline"
                >
                  here
                </a>
              </p>
            </Collapsible>
          </div>
        </div>
      <div id="footer">
          <p>
          No information is collected from the download or use of this tool. GCA and Intel care about your privacy. View the&nbsp;
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
    </div>
  );
}
