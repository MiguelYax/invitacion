
export default function Text({ children, size = 4,  className = '', center = false, style = {} }) {
const cn = `${center ? 'text-center' : ''} ${size ? `h${size}` : ''} ${className}`;

  return (
    <p className={cn} style={style}>
      {children}
    </p>
  );
}

export function Title ({ children, className = "mt-5" }) {
  return (
    <Text size={1} center={true} className={className}>
      {children}
    </Text>
  );
}

export function Paragraph({ children, className="mt-4" }) {
  return (
    <Text size={4} className={className} >
      {children}
    </Text>
  );
}

export function Caption({ children, className = "mt-2" }) {
  return (
    <Text size={6} className={className}>
      {children}
    </Text>
  );
}