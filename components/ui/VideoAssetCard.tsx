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
    <div className="bg-[#0F1212] border border-[#272A2A] rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="aspect-video w-full">
        <iframe
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-center mt-3 text-base max-w-[600px] font-tight text-white tracking-wide mb-2 font-bold">
          {title}
        </h3>
        <p className="text-center mt-3 text-sm max-w-[600px] font-tight text-[#D3D3D3] tracking-wide ">{description}</p>
      </div>
    </div>
  );
}
