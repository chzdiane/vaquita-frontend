import Logo from "../assets/logo.decoration.svg";
import Layout from "../components/Layout";

const InitialPage = () => {
  return (
    <Layout>
    <div className="flex justify-center m-4">
        <img src={Logo} alt="Logo" />
    </div>
    </Layout>
  );
};

export { InitialPage };
