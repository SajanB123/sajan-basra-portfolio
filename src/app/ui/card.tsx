export default function Card({
    children,
    id, // Accept the id prop
    backgroundColor = "bg-gray-100", // Default background color
  }: Readonly<{
    children: React.ReactNode;
    id?: string;
    backgroundColor?: string;
  }>) {
    return (
    <div className="min-w-screen min-h-screen">
        <div id={id} className={`flex flex-col justify-center ${backgroundColor} min-w-screen min-h-screen`}>
            {children}
        </div>
    </div>
    );
  }
