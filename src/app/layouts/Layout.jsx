import Menu from "../components/Menu";
import PageAnimation from "../components/PageAnimation";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div
      className={`md:flex mainGrid gap-4 max-w-[1920px] mx-auto`}
    >
      <div>
        <Menu />
      </div>
      <PageAnimation>{children}</PageAnimation>
    </div>
  );
}
