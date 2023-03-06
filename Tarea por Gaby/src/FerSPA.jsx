import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./router/AppRouter";

export const FerSPA = () => {
  return (
    <>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </>
  );
};
