import AppProvider from "./context/provider";
import ItemsPage from "./pages/ItemsPage";

function App() {
  return (
    <AppProvider>
      <ItemsPage />
    </AppProvider>
  );
}

export default App;
