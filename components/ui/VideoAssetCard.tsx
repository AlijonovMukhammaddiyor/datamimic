interface VideoAssetCardProps {
  title: string;
  description: string;
  youtubeVideoId: string;
}

export default function VideoAssetCard({ title, description, youtubeVideoId }: VideoAssetCardProps) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&mute=1&loop=1&playlist=${youtubeVideoId}&controls=1&showinfo=0&autohide=1`;
  // Note: autoplay is set to 0 (false) by default for better UX, users can click to play.
  // Mute is on by default for courtesy if autoplay were enabled.
  // Controls are enabled.

  return (
    <div className="group bg-[#0A0C0C]/80 backdrop-blur-sm border border-jala-red/30 rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-jala-red/40 hover:shadow-2xl hover:scale-[1.02] hover:border-jala-red/70 cursor-pointer">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg ring-1 ring-inset ring-jala-red/20 group-hover:ring-jala-red/50 transition-all duration-300">
        {/* Optional: Add a play icon overlay here if desired */}
        <iframe
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3
          className="text-lg font-main tracking-wide uppercase md:text-xl font-semibold text-white mb-2 group-hover:text-jala-red transition-colors duration-300"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
        >
          {title}
        </h3>
        <p className="text-left mt-3 text-sm max-w-[600px] font-tight text-[#D3D3D3] tracking-wide ">{description}</p>
        {/* Optional: Add a small "Watch Video ->" link/button here */}
      </div>
      {/* Subtle animated data stream element - conceptual */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ pointerEvents: "none" }}
      >
        <div className="absolute -top-1/2 -left-1/2 w-full h-auto animate-pulse opacity-20">
          {/* This could be an SVG or a carefully crafted set of divs for a data stream effect */}
          {/* For simplicity, this is a placeholder concept */}
        </div>
      </div>
    </div>
  );
}
