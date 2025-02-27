import { readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { type SecureVersion } from 'tls';

// Ensure certificates directory exists
const certDir = join(process.cwd(), 'certificates');
if (!existsSync(certDir)) {
  mkdirSync(certDir, { recursive: true });
}

export const sslConfig = {
  key: readFileSync(join(certDir, 'key.pem')),
  cert: readFileSync(join(certDir, 'cert.pem')),
  // Modern security settings
  minVersion: 'TLSv1.2' as SecureVersion,
  cipherSuites: [
    'TLS_AES_128_GCM_SHA256',
    'TLS_AES_256_GCM_SHA384',
    'TLS_CHACHA20_POLY1305_SHA256'
  ]
};