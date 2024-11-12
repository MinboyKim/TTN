const Dashboard = () => {
  return (
    <div className="p-4 flex flex-col gap-4 w-full">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome to the dashboard</p>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full h-full">
        <div className="p-6 border rounded-xl col-span-3 h-full">
          <h1 className="text-2xl font-bold">Sentiment Analyze</h1>
        </div>
        <div className="p-6 border rounded-xl col-span-1 h-full">
          <h1 className="text-2xl font-bold">Buddy</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
