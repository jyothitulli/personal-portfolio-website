// export function TiltCard({ children, className = '', glassVariant = 'dark' }) {
//   return (
//     <div
//       className={`cinematic-card ${glassVariant === 'dark' ? 'glass-dark' : 'glass-light'} relative rounded-2xl transition-all duration-400 ${className}`}
//     >
//       {/* Inner soft glow reflection */}
//       <div className="inner-glow" />
      
//       {children}
//     </div>
//   )
// }

// export function TiltCard({ children, className = '', glassVariant = 'dark' }) {
//   return (
//     <div
//       className={`cinematic-card ${glassVariant === 'dark' ? 'glass-dark' : 'glass-light'} relative rounded-2xl transition-all duration-400 ${className}`}
//     >
//       {/* Inner soft glow reflection */}
//       <div className="inner-glow" />
      
//       {children}
//     </div>
//   )
// }
export function TiltCard({ children, className = '', glassVariant = 'dark' }) {
  return (
    <div
      className={`cinematic-card ${glassVariant === 'dark' ? 'glass-dark' : 'glass-light'} relative rounded-2xl transition-all duration-400 ${className}`}
    >
      {/* Inner soft glow reflection */}
      <div className="inner-glow" />
      
      {children}
    </div>
  )
}