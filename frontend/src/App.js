import "bootstrap/dist/css/bootstrap.min.css";
import AddUrlComponent from "./components/AddUrlComponent";
import ViewUrlComponent from "./components/ViewUrlComponent";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App container mt-5">
        <ToastContainer
            className="z-60"
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            closeOnClick
            pauseOnHover
          />
      <AddUrlComponent />
      <ViewUrlComponent />
    </div>
  );
}

export default App;