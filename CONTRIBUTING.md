# Contributing to Bridgepoint Freight & Logistics

Thank you for your interest in contributing to our project!

## Code of Conduct

- Be respectful and professional
- Focus on constructive feedback
- Respect intellectual property

## Getting Started

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/your-username/bridgepoint-freight-logistics.git
cd bridgepoint-freight-logistics

# Install dependencies
npm install

# Create a feature branch
git checkout -b feature/your-feature-name
```

## Development Workflow

### Before Making Changes

1. Check existing issues and PRs to avoid duplicates
2. Create an issue to discuss major changes
3. Follow the existing code style

### Making Changes

1. **Write clean code**
   - Use TypeScript for type safety
   - Follow the existing project structure
   - Add comments for complex logic

2. **Test your changes**
   ```bash
   npm run dev
   npm run lint
   ```

3. **Keep commits focused**
   - One feature/fix per commit
   - Use descriptive commit messages
   - Reference issues when relevant

### Commit Message Format

```
type: subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Tests
- `chore`: Build, dependencies, etc.

**Examples:**
```
feat: add testimonials section
fix: correct header alignment on mobile
docs: update installation instructions
```

## Pull Request Process

1. **Before submitting:**
   - Run `npm run lint` and fix any issues
   - Test on multiple browsers/devices
   - Update documentation if needed

2. **Submission:**
   - Create PR with clear title and description
   - Reference related issues
   - Include screenshots for UI changes

3. **During review:**
   - Respond to feedback promptly
   - Make requested changes in new commits
   - Don't force-push during review

4. **After approval:**
   - Squash commits if requested
   - Merge to main branch
   - Delete feature branch

## Coding Standards

### TypeScript

```typescript
// Use proper typing
interface Props {
  title: string
  onClick: () => void
}

const MyComponent: React.FC<Props> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>
}
```

### React Components

```typescript
// Use functional components
const ComponentName = () => {
  const [state, setState] = useState(false)
  
  return (
    <div className="space-y-4">
      {/* JSX */}
    </div>
  )
}

export default ComponentName
```

### Tailwind CSS

```tsx
// Use Tailwind utilities
<div className="grid md:grid-cols-2 gap-4">
  <button className="btn btn-primary">Primary</button>
  <button className="btn btn-secondary">Secondary</button>
</div>
```

### File Organization

- Components in `src/components/`
- Page sections in `src/sections/`
- Utilities in `src/utils/`
- Hooks in `src/hooks/`
- Types in `src/types/`
- Styles in `src/styles/`

## Testing

While full test coverage is appreciated:
- Write tests for utilities
- Consider component behavior tests
- Test responsive design

## Documentation

For new features or changes:
- Update README if applicable
- Add JSDoc comments for functions
- Include inline comments for complex logic
- Update constants.ts with new data

## Bug Reports

When reporting bugs:
1. Use descriptive title
2. Describe steps to reproduce
3. Expected vs actual behavior
4. Browser/device information
5. Screenshots if applicable

## Feature Requests

For new features:
1. Describe the use case
2. Explain the expected behavior
3. Consider existing alternatives
4. Link to related features/issues

## Performance Considerations

- Lazy load heavy components
- Optimize images
- Use React.memo for expensive components
- Monitor bundle size
- Profile animations

## Accessibility

- Ensure keyboard navigation
- Add proper ARIA labels
- Check color contrast
- Test with screen readers
- Maintain semantic HTML

## Questions?

- Check existing documentation
- Search closed issues
- Create a discussion
- Contact the team

## Thank You!

Your contributions make Bridgepoint better. We appreciate your effort and time!

---

**Maintainers**: Bridgepoint Team
