import "../styles/globals.css";
import "antd/dist/antd.css";

// eslint-disable-next-line react/prop-types
const MyApp = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default MyApp;
