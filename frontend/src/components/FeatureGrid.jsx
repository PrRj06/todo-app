import FeatureGridItem from "./ui/FeatureGridItem";
function FeatureGrid(){
    const features = [
      {
        icon: "📋",
        title: "Smart Lists",
        desc: "Organize tasks into projects, areas, and tags. Smart filters surface what matters right now.",
      },
      {
        icon: "🗓",
        title: "Due Dates & Reminders",
        desc: "Never miss a deadline. Set due dates, recurring tasks, and receive timely reminders.",
      },
      {
        icon: "🏷",
        title: "Tags & Priorities",
        desc: "Color-code and prioritize with a single click. Focus on high-impact work first.",
      },
      {
        icon: "🌙",
        title: "Light & Dark Themes",
        desc: "Beautiful in any light. Switch seamlessly between themes or let the system decide.",
      },
      {
        icon: "📊",
        title: "Progress Insights",
        desc: "See your productivity patterns and celebrate streaks with elegant progress visualizations.",
      },
      {
        icon: "🔒",
        title: "Private & Secure",
        desc: "Your tasks stay yours. End-to-end protection for everything you plan and achieve.",
      },
    ];
    return (
        <>
            <div className="grid grid-cols-3 max-w-5xl [&>*]:border-(--bg-glow) [&>*:not(:nth-child(3n))]:border-r [&>*:nth-child(-n+3)]:border-b">
                {
                    features.map((feature) => (
                        <FeatureGridItem key={feature.icon} icon={feature.icon} title={feature.title} desc={feature.desc}/>
                    ))
                }
            </div>
        </>
    )
};
export default FeatureGrid;
