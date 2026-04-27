export function EnvVarWarning() {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div style={{ color: 'orange' }}>
      Environment variables may be missing.
    </div