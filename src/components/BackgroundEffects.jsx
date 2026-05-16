import Particles from 'react-tsparticles'

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <Particles
        options={{
          background: {
            color: 'transparent',
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 20,
            },
            color: {
              value: '#8b5cf6',
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: 2,
            },
            move: {
              enable: true,
              speed: 0.6,
            },
            links: {
              enable: false,
            },
          },
        }}
      />
    </div>
  )
}

export default BackgroundEffects