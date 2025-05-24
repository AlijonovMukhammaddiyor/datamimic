import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
// import AssetCard from "@/components/ui/AssetCard"; // Old card, no longer needed
// import Marquee from "react-fast-marquee"; // Marquee no longer needed
import VideoAssetCard from "@/components/ui/VideoAssetCard"; // New card

interface VideoAssetProp {
  title: string;
  description: string;
  youtubeVideoId: string;
}

const videoAssetProps: VideoAssetProp[] = [
  {
    title: "Walking Policy Tested on Real Hardware",
    description:
      "This demo shows our end-to-end pipeline in action: human operators in MoCap suits collect diverse locomotion trajectories, which we retarget to the robot's kinematic model. We then train a sim-to-real walking policy on that dataset and deploy it directly to hardware—achieving dynamic, stable humanoid gait.",
    youtubeVideoId: "9qvbCUorK34", // <<< REPLACE THIS WITH ACTUAL YOUTUBE VIDEO ID
  },
  {
    title: "Simulation Pipeline: Training Policies from Our Dataset",
    description:
      "In our high-fidelity simulator, we initialize the humanoid with retargeted motion and teleop trajectories from our dataset, then train and validate robust control policies before real-world deployment. This pipeline helps humanoid companies validate their dataset fast in simulation.",
    youtubeVideoId: "D3dI63GXNTk", // <<< REPLACE THIS WITH ACTUAL YOUTUBE VIDEO ID
  },
  {
    title: "Our MoCap Setup",
    description:
      "Our MoCap studio captures precise full-body human motions using high-fidelity sensors. We then automatically retarget those recordings to the robot's kinematic model, creating realistic training data for robust policy development.",
    youtubeVideoId: "vIc5sNNMnd4", // <<< REPLACE THIS WITH ACTUAL YOUTUBE VIDEO ID
  },
  {
    title: "Fine manipulation tasks",
    description:
      "This demo highlights dexterous manipulation learned from our teleoperation dataset. Operators use VR headsets and haptic sensor gloves to capture precise finger trajectories, force profiles, and tactile feedback, which we use to train and validate fine manipulation models.",
    youtubeVideoId: "5iIs3b9yFvs", // <<< REPLACE THIS WITH ACTUAL YOUTUBE VIDEO ID
  },
];

export default function AssetSection() {
  const isMobile = useCheckIsMobile();

  return (
    <div className="w-full 2xl:py-10">
      <section className="container mx-auto px-4 py-12 md:py-16">
        {isMobile ? (
          <>
            <div className="text-center mb-10">
              <div className="uppercase text-[48px] leading-[56px] font-medium text-start">
                <span className="text-white">Our </span>
                <span className="text-[#FF1D00] ">Showcase</span> {/* Updated mobile title */}
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              {videoAssetProps.map((asset, index) => (
                <VideoAssetCard
                  key={index}
                  title={asset.title}
                  description={asset.description}
                  youtubeVideoId={asset.youtubeVideoId}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-16">
              <h2 className="uppercase text-white text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-tight tracking-wide font-semibold">
                You accelerate <span className="text-jala-red">AI</span>. We handle the{" "}
                <span className="text-jala-red">data</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {videoAssetProps.map((asset, index) => (
                <VideoAssetCard
                  key={index}
                  title={asset.title}
                  description={asset.description}
                  youtubeVideoId={asset.youtubeVideoId}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
