import { HeroSection } from "../components/HeroSection";

export const HomePage = ({ user }) => {
  return (
    <div className="">
      <HeroSection user={user} />
      <h1 className="">Home Page</h1>
    </div>
  );
};
