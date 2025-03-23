"use client";
import {
  Home,
  Users,
  Calendar,
  Settings,
  BarChart,
  Inbox,
  FileText,
} from "lucide-react";
import Image from "next/image";

const MockDashboard = () => {
  return (
    <div className="bg-background flex h-full w-full overflow-hidden text-xs">
      {/* Sidebar */}
      <div className="bg-muted/50 flex h-full w-[30%] min-w-[80px] flex-col border-r">
        <div className="flex items-center gap-2 border-b p-3">
          <div className="bg-primary h-4 w-4 rounded-full">
            <Image src="/logo.png" alt={"logo"} width={30} height={30} />
          </div>
          <span className="text-xs font-semibold">WorkKitIO</span>
        </div>
        <div className="flex flex-col gap-1 p-2">
          <div className="bg-primary/10 text-primary flex items-center gap-2 rounded-md p-2">
            <Home className="h-3 w-3" />
            <span className="text-xs">Dashboard</span>
          </div>
          {[
            { icon: Users, label: "Team" },
            { icon: Calendar, label: "Calendar" },
            { icon: Inbox, label: "Messages" },
            { icon: FileText, label: "Documents" },
            { icon: BarChart, label: "Analytics" },
            { icon: Settings, label: "Settings" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-muted-foreground hover:bg-muted flex items-center gap-2 rounded-md p-2"
            >
              <item.icon className="h-3 w-3" />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex h-10 items-center justify-between border-b px-3">
          <div className="flex items-center gap-2">
            {/* <Button variant="ghost" size="icon" className="h-6 w-6">
              <PanelLeft className="h-3 w-3" />
            </Button> */}
            <span className="text-xs font-medium">Dashboard</span>
          </div>
          <div className="bg-muted h-5 w-5 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid flex-1 grid-cols-2 gap-2 p-3">
          {/* Stats Cards */}
          <div className="col-span-2 grid grid-cols-3 gap-2">
            {[
              { label: "Total Clients", value: "25", change: "+12%" },
              { label: "Active Projects", value: "48", change: "+5%" },
              { label: "Completion Rate", value: "87%", change: "+3%" },
            ].map((stat, i) => (
              <div key={i} className="bg-card rounded-md border p-2">
                <div className="text-muted-foreground text-[10px]">
                  {stat.label}
                </div>
                <div className="flex items-end justify-between">
                  <div className="font-semibold">{stat.value}</div>
                  <div className="text-[10px] text-green-500">
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-card col-span-2 h-20 rounded-md border p-2">
            <div className="text-muted-foreground mb-1 text-[10px]">
              Weekly Activity
            </div>
            <div className="flex h-12 items-end justify-between px-1">
              {[35, 45, 30, 60, 75, 50, 40].map((height, i) => (
                <div
                  key={i}
                  className="bg-primary/80 w-[8%] rounded-sm"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card col-span-1 rounded-md border p-2">
            <div className="text-muted-foreground mb-1 text-[10px]">
              Recent Activity
            </div>
            <div className="space-y-1">
              {[
                "New task assigned",
                "Project deadline updated",
                "Team meeting scheduled",
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-1 text-[10px]">
                  <div className="bg-primary h-1.5 w-1.5 rounded-full"></div>
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-card col-span-1 rounded-md border p-2">
            <div className="text-muted-foreground mb-1 text-[10px]">Tasks</div>
            <div className="space-y-1">
              {[
                { task: "Update documentation", completed: true },
                { task: "Review pull request", completed: false },
                { task: "Prepare presentation", completed: false },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-1 text-[10px]">
                  <div
                    className={`flex h-3 w-3 items-center justify-center rounded-sm border ${task.completed ? "bg-primary border-primary" : "border-muted-foreground"}`}
                  >
                    {task.completed && (
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span
                    className={
                      task.completed ? "text-muted-foreground line-through" : ""
                    }
                  >
                    {task.task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MockDashboard;
