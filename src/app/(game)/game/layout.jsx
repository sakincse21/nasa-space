import GoBack from "@/components/GoBack";


export const metadata = {
  title: "Game | Gravity 0.0",
  description: "By Team Poromanu",
};
export default function Page({ children }) {
  return (
    <div className="min-w-screen min-h-screen relative">
      <GoBack />
      {children}
    </div>
  );
}
