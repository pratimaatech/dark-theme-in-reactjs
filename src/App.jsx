import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      <Header />

      <AppRoutes />

    </div>
  );
}

export default App;