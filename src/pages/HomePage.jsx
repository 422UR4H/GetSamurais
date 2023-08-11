import useToken from "../hooks/useToken.js";
import MainTemplate from "../components/templates/MainTemplate.jsx";


export default function HomePage() {
    const { token } = useToken();

    return (
        <MainTemplate>
            HomePage
        </MainTemplate>
    );
}
