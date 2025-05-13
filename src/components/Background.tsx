const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black/80" /> {/* Overlay escuro */}
      <img
        src="/assets/tech-bg.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default Background 