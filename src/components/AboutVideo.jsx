export default function AboutVideo() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/oA3mA-rsKWo"
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
