import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<ToastContainer
				autoClose={2500}
				limit={3}
				position="top-center"
				stacked
			/>
			<Navbar />
			<Home />
			<Footer />
		</>
	);
}

export default App;
