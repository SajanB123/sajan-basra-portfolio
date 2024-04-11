
export default function Card({
    children,
  }: Readonly<{
    children: React.ReactNode;
    id?: string;
  }>) {
    return (
    <div className="min-w-screen min-h-screen">
        <div className="flex flex-col justify-center dark:bg-gray-950 bg-gray-100 min-w-screen min-h-screen">
            {children}
        </div>
    </div>
    );
  }
