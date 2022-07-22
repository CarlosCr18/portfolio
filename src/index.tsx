import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Projects from "./routes/projects/Projects";
import Contact from "./routes/contact/Contact";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/Contact" element={<Contact />} />
				{/* <Route path="/ordenes" element={<ListaDeOrdenes />} />
      <Route path="/carrito" element={<CrearOrdenCarrito />} /> */}
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
