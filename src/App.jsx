import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import StockList from "./components/StockList";
import "./App.css";

function App() {
  const { user } = useUser();

  return (
    <div className="app-container">
      <header>
        <h1>Finora.io</h1>
        <h3>Track your favorite Stocks.</h3>
      </header>
      <SignedOut>
        <div>
          <p>Login to manager your stocks.</p>
          <SignIn></SignIn>
        </div>
      </SignedOut>

      <SignedIn>
        {user ? (
          <>
            <div className="user-header">
              <UserButton />
              <p>Hello, {user.firstName || user.username || "User"}! 👋</p>
            </div>
            <StockList userId={user.id}></StockList>
          </>
        ) : (
          <p>Loading user...</p>
        )}
      </SignedIn>
    </div>
  );
}

export default App;
