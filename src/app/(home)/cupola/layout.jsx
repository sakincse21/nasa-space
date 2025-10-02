import GoBack from "@/components/GoBack";



export const metadata = {
  title: "Cupola Images | Gravity 0.0",
  description: "By Team Poromanu",
};

export default function Page({children}) {
    return (
        <div className="min-h-screen min-w-screen relative">
            <GoBack />
            {children}
        </div>
    );
}