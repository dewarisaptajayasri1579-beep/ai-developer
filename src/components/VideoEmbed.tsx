function toDriveEmbedUrl(source: string): string {
  const match = source.match(/[-\w]{25,}/);
  const fileId = match ? match[0] : source;
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export default function VideoEmbed({ source }: { source: string }) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-neon/20 bg-black">
      <div className="relative aspect-video">
        <iframe
          src={toDriveEmbedUrl(source)}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
