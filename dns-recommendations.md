# DNS Configuration Recommendations for Namecheap

## Required DNS Records for Vercel Deployment

Based on the Namecheap documentation and your Vercel deployment, here are the DNS records you should configure:

### A Records (IPv4)
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 1 hour |

### CNAME Records
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cname.vercel-dns.com | 1 hour |
| CNAME | * | cname.vercel-dns.com | 1 hour |

### TXT Records (for domain verification)
| Type | Host | Value | TTL |
|------|------|-------|-----|
| TXT | @ | verify=politico-verification-code | 1 hour |

### MX Records (if using email)
| Type | Host | Value | Priority | TTL |
|------|------|-------|----------|-----|
| MX | @ | mx1.forwardemail.net | 10 | 1 hour |
| MX | @ | mx2.forwardemail.net | 20 | 1 hour |

### Additional Recommendations

1. **DNS Propagation**: Changes to DNS records can take up to 48 hours to fully propagate. If not seeing immediate results, wait and check again later.

2. **SSL Certificate**: Vercel automatically provisions SSL certificates. No additional steps required.

3. **Domain Verification in Vercel**: 
   - Add your domain in the Vercel dashboard
   - Follow the verification steps provided

4. **DNSSEC**: Consider enabling DNSSEC for additional security.

5. **CAA Records**: If you want to restrict which Certificate Authorities can issue certificates for your domain, add a CAA record.

## Troubleshooting

If experiencing issues with API access or authentication:

1. Clear Vercel's build cache
2. Check CORS settings in middleware.js and API routes
3. Verify that environment variables are set correctly
4. Test the API with tools like Postman or curl before integrating with frontend
5. Monitor the Vercel deployment logs for errors

Remember to update your frontend code to use the correct API endpoints after DNS configuration is complete. 