import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';


@Injectable()
export class AuthService {
  private readonly jwksClient: jwksClient.JwksClient;

  constructor(
    private configService: ConfigService,
  ) {
    const jwksUri = this.configService.get<string>('JWKS_URI') || '';

    this.jwksClient = new jwksClient.JwksClient({
      jwksUri,
      cache: false,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
    });
  }

  private async getPublicKey(kid: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.jwksClient.getSigningKey(kid, (err, key) => {
        if (err) {
          return reject(new UnauthorizedException('Failed to fetch public key'));
        }
        const publicKey = key?.getPublicKey();
        resolve(publicKey || '');
      });
    });
  }

  async validateAccessToken(token: string): Promise<any> {
    const issuer = this.configService.get<string>('JWT_ISSUER') || '';
    const audience = this.configService.get<string>('AZURE_CLIENT_ID') || '';

    const decoded = jwt.decode(token, { complete: true }) as any;

    console.log('Decoded token:', decoded);
    if (!decoded || !decoded.header.kid) {
      throw new UnauthorizedException('Invalid token: Missing kid');
    }

    const key = await this.getPublicKey(decoded.header.kid);
    console.log('Public key:', key);

    try {
      console.log('verifying token: ', issuer, audience);
      const verified = jwt.verify(token, key, {
        algorithms: ['RS256'],
        issuer,
        audience,
      });
      console.log('verified:', verified);

      return verified;
    } catch (error) {
      console.log('error', error);
      throw new UnauthorizedException('Token verification failed: ' + error.message);
    }
  }
}
