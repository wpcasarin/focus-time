import { GlobalProvider } from './src/context/GlobalContext';

import { MainScreen } from './src/screens/MainScreen';

function App() {
  return (
    <GlobalProvider>
      <MainScreen />
    </GlobalProvider>
  );
}

export default App;
