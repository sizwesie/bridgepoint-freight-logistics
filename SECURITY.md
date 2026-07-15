# Security Policy

## Reporting Security Issues

If you discover a security vulnerability, please email security@bridgepoint.co.za instead of using the issue tracker.

**Please do not publicly disclose the vulnerability until we've had a chance to address it.**

## What to Include

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Response Timeline

- Initial response: Within 48 hours
- Status updates: Every 72 hours
- Resolution target: 30 days for critical issues

## Security Best Practices

### Dependencies

- Keep npm packages updated
- Run `npm audit` regularly
- Review dependency changelogs
- Use lock file (`package-lock.json`)

### Code

- Never commit secrets or API keys
- Use environment variables for sensitive data
- Validate all user inputs
- Sanitize output in forms
- Use HTTPS in production

### Deployment

- Enable CORS appropriately
- Set secure headers
- Use Content Security Policy
- Implement rate limiting
- Monitor for suspicious activity

## Environment Variables

Never commit:
```
.env
.env.local
.env.*.local
```

Add to `.gitignore` (already done)

## HTTPS

- Always use HTTPS in production
- Implement HSTS
- Use secure cookies
- Validate SSL certificates

## Data Protection

- Encrypt sensitive data
- Use secure transmission
- Follow GDPR/POPI compliance
- Implement proper access controls
- Regular security audits

## Third-Party Services

- Vet all third-party integrations
- Review privacy policies
- Monitor for vulnerabilities
- Have backup providers
- Regular security reviews

## Updates

- Apply security patches promptly
- Monitor security advisories
- Test updates before deployment
- Keep production systems updated

## Compliance

- GDPR ready
- POPI compliant
- PCI DSS (if handling payments)
- Regular compliance audits

---

**Last Updated**: July 2024
