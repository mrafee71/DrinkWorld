import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";

function App() {

  return (
    <BrowserRouter>
		<Routes>
			<Route element={<Navbar />}>
				<Route index element={<h1 className="bg-secondary">Home</h1>} />
				<Route path="shop" element={<h1>Shop</h1>} />
				<Route path="about" element={<h1>About</h1>} />
				<Route path="contact" element={<h1>Contact</h1>} />
			</Route>
		</Routes>
    </BrowserRouter>
  )
}

export default App
